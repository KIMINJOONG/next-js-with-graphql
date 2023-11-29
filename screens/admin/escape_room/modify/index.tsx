import {gql} from '@apollo/client';
import {
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {arrayMoveMutable} from 'array-move';
import axiosInstance from 'assets/apis/axiosInstance';
import {GQL_DOMAIN} from 'assets/utils/ENV';
import Axios from 'axios';
import Header from 'components/Header';
import PicSortComponent from 'components/Sort';
import {NameNode, OperationDefinitionNode} from 'graphql';
import {useRouter} from 'next/router';
import {Fragment, useRef, useState} from 'react';
import {ISanck} from 'types/type';
import {NewsContainer} from '../styles';

interface ISignedData {
  url: string;
  key: string;
  list_order: number;
}

interface IEscapeRoom {
  idx: number;
  title: string;
  content: string;
  person_count: number;
  difficulty_score: number;
  created_at: Date;
  mainImage: IEscapeRoomImage | undefined;
  images: Array<IEscapeRoomImage>;
}

interface IEscapeRoomImage {
  idx?: number;
  file?: File;
  key: string;
  list_order: number;
}

interface INewDeatilData {
  escape_room: IEscapeRoom;
}

interface IProps {
  data: INewDeatilData | undefined;
}

// modifiyNews(idx: Int, category_idx: Int! title: String!, content: String!

const gquery = `
    mutation modifiyEscapeRoom($escapeRoom:EscapeRoomInput!) {
        modifiyEscapeRoom(escapeRoom:$escapeRoom) {
            status
            token
            data {
                idx
                title
                content
                person_count
                difficulty_score
                created_at
                mainImage {
                  key
                  list_order
                }
                images {
                    idx
                    key
                    list_order
                }
            }
            error {
                remark
                code
                text
            }
        }
    }
`;

const gqlQuery = gql`
  ${gquery}
`;

const readFileAsync = (file: File) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const preSignedQuery = `
    query preSignedQuery($exts: [ExtInput], $type: String) {
        preSignedQuery(exts: $exts, type: $type) {
            status
            token
            data {
                url
                key
                list_order
            }
            error {
                remark
                code
                text
            }
        }
    }
`;
const preQuery = gql`
  ${preSignedQuery}
`;

const EscapeRoomModifyScreen = ({data}: IProps) => {
  console.log('data :', data);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [escapeRoom, setEscapeRoom] = useState<IEscapeRoom>(
    data?.escape_room ?? {
      idx: -1,
      title: '',
      content: '',
      person_count: 0,
      difficulty_score: 0,
      mainImage: {
        key: '',
        list_order: 1,
      },
      created_at: new Date(),
      images: [],
    },
  );
  const isMobile = useMediaQuery('(max-width : 576px)');

  const onChangeTitle = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    escapeRoom.title = e.target.value;
    setEscapeRoom({
      ...escapeRoom,
    });
  };

  const onChangeContent = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    escapeRoom.content = e.target.value;
    setEscapeRoom({
      ...escapeRoom,
    });
  };

  const onChangePersonCount = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    escapeRoom.person_count = parseInt(e.target.value);
    setEscapeRoom({
      ...escapeRoom,
    });
  };

  const onChangeDifficultyScore = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    escapeRoom.difficulty_score = parseInt(e.target.value);
    setEscapeRoom({
      ...escapeRoom,
    });
  };

  const [snack, setSnack] = useState<ISanck>({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
    message: '',
    // sx: { "& .MuiSnackbarContent-root": { backgroundColor: "green" } }
    sx: {},
  });

  const openSnack = (message: string) => {
    setSnack({...snack, open: true, message: message});
  };

  const handleSnackClose = () => {
    setSnack({...snack, open: false, message: ''});
  };

  const onClickSubmit = async () => {
    if (loading) {
      return;
    }
    if (!escapeRoom.title) {
      openSnack('방탈출 제목을 입력해주세요');
      return;
    }
    if (!escapeRoom.content) {
      openSnack('방탈출 내용을 입력해주세요');
      return;
    }

    setLoading(true);
    const mainImageLogic = await uploadMainImage();
    const imageLogic = await uploadImage();
    if (!imageLogic) {
      setLoading(false);
      openSnack('이미지 등록중 오류 발생');
      return;
    }

    if (!mainImageLogic) {
      setLoading(false);
      openSnack('이미지 등록중 오류 발생');
      return;
    }
    const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
    const {value} = innerQuery.name as NameNode;
    try {
      const {data} = await axiosInstance(value).post(`${GQL_DOMAIN}`, {
        query: gquery,
        variables: {
          escapeRoom: {
            idx: escapeRoom.idx,
            title: escapeRoom.title,
            content: escapeRoom.content,
            personCount: escapeRoom.person_count,
            difficultyScore: escapeRoom.difficulty_score,
            mainImage: escapeRoom.mainImage,
            images: escapeRoom.images,
          },
        },
      });
      if (data.data[value].status === 200) {
        const result = data.data[value].data;
        setEscapeRoom(result);
        if (escapeRoom.idx === -1) {
          router.replace(`/admin/escape_room/modify?idx=${result.idx}`);
          openSnack('방탈출 생성 완료');
        } else {
          openSnack('방탈출 수정 완료');
        }
      } else {
        openSnack('방탈출 생성중 오류 발생');
      }
      // await awaitTimer(1500)
      router.push({
        pathname: '/admin/escape_room',
      });
    } catch (e) {
      console.log(e);
      openSnack('방탈출 생성중 오류 발생');
    }
    setLoading(false);
  };

  const uploadImage = async (): Promise<boolean> => {
    const exts = escapeRoom.images
      .filter(img => img.file)
      .map(item => {
        const name = item.file!.name;
        const lastDot = name.lastIndexOf('.');

        // const fileName = name.substring(0, lastDot);
        const ext = name.substring(lastDot + 1);
        return {
          ext,
          list_order: item.list_order,
        };
      });

    if (!exts.length) {
      return true;
    }

    const innerQuery = preQuery.definitions[0] as OperationDefinitionNode;
    const {value} = innerQuery.name as NameNode;
    try {
      const {data} = await axiosInstance(value).post(`${GQL_DOMAIN}`, {
        query: preSignedQuery,
        variables: {
          exts: exts,
          type: 'escape_room',
        },
      });

      const result = data.data[value].data as Array<ISignedData>;
      await Promise.all(
        result.map(async re => {
          const image = escapeRoom.images[re.list_order];
          console.log('re.url :', re.url);
          await Axios({
            url: re.url,
            method: 'PUT',
            headers: {
              'Content-Type': image.file?.type,
            },
            data: image.file,
          });
          image.key = re.key;
          delete image.file;
        }),
      );
      return true;
    } catch (e) {}
    return false;
  };

  const uploadMainImage = async (): Promise<boolean> => {
    if (!escapeRoom.mainImage) {
      return true;
    }

    if (escapeRoom.mainImage) {
      const name = escapeRoom.mainImage.file!.name;
      const lastDot = name.lastIndexOf('.');
      const ext = name.substring(lastDot + 1);
      const list_order = escapeRoom.mainImage.list_order;

      const exts = {
        ext,
        list_order,
      };

      const innerQuery = preQuery.definitions[0] as OperationDefinitionNode;
      const {value} = innerQuery.name as NameNode;
      try {
        const {data} = await axiosInstance(value).post(`${GQL_DOMAIN}`, {
          query: preSignedQuery,
          variables: {
            exts: [exts],
            type: 'escape_room',
          },
        });

        const result = data.data[value].data as Array<ISignedData>;
        await Promise.all(
          result.map(async re => {
            const image = escapeRoom.mainImage!;
            await Axios({
              url: re.url,
              method: 'PUT',
              headers: {
                'Content-Type': image.file?.type,
              },
              data: image.file,
            });
            image.key = re.key;
            delete image.file;
          }),
        );
        return true;
      } catch (e) {}
    }
    return false;
  };

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    const sortingArray = [...escapeRoom.images];
    arrayMoveMutable(sortingArray, oldIndex, newIndex);
    setEscapeRoom({
      ...escapeRoom,
      images: sortingArray.map((img, index) => {
        return {
          ...img,
          list_order: index,
        };
      }),
    });
  };

  const onClickRemoveSubImage = (index: number) => {
    escapeRoom.images.splice(index, 1);
    setEscapeRoom({
      ...escapeRoom,
      images: escapeRoom.images.map((img, idx) => {
        return {
          ...img,
          list_order: idx,
        };
      }),
    });
  };

  const onClickRemoveMainImage = () => {
    delete escapeRoom.mainImage;
    setEscapeRoom({
      ...escapeRoom,
    });
  };

  const imageRef = useRef<HTMLInputElement>(null);
  const imageMainRef = useRef<HTMLInputElement>(null);

  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    const fileArray = Array.from(files);
    const mutationFiles = await Promise.all(
      fileArray.map(async (file, i) => {
        const result = await readFileAsync(file);
        return {
          key: result?.toString(),
          list_order: escapeRoom.images.length + i,
          file,
        };
      }),
    );
    setEscapeRoom({
      ...escapeRoom,
      images: [
        ...escapeRoom.images,
        ...(mutationFiles as Array<IEscapeRoomImage>),
      ],
    });
    if (imageRef.current) {
      imageRef.current.value = '';
    }
  };

  const onChangeMainImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      const result = await readFileAsync(file);
      if (result) {
        const image = {
          key: result?.toString(),
          list_order: 1,
          file,
        };
        setEscapeRoom({
          ...escapeRoom,
          mainImage: image,
        });
        if (imageMainRef.current) {
          imageMainRef.current.value = '';
        }
      }
    }
  };

  return (
    <div>
      <Header />
      <NewsContainer>
        <div className="n-title">
          <Typography variant="h1">
            {isMobile ? (
              <Fragment>
                방탈출
                <br />
                만들기
              </Fragment>
            ) : (
              '방탈출 만들기'
            )}
          </Typography>
        </div>
        <div className="n-field">
          <div className="title">
            <TextField
              fullWidth
              placeholder={'방탈출 제목을 입력해주세요.'}
              label="방탈출 제목"
              value={escapeRoom.title}
              onChange={onChangeTitle}
            />
          </div>
          <TextField
            title="content"
            label="방탈출 내용"
            placeholder={'방탈출 내용을 입력해주세요.'}
            multiline
            rows={10}
            value={escapeRoom.content}
            onChange={onChangeContent}
          />
          <div className="personCount" style={{marginTop: 10}}>
            <TextField
              fullWidth
              placeholder={'방탈출 인원수를 입력해주세요.'}
              label="방탈출 인원수"
              value={escapeRoom.person_count}
              onChange={onChangePersonCount}
              type="number"
            />
          </div>
          <div className="difficultyScore" style={{marginTop: 10}}>
            <TextField
              fullWidth
              placeholder={'방탈출 난이도를 입력해주세요.'}
              label="방탈출 난이도"
              value={escapeRoom.difficulty_score}
              onChange={onChangeDifficultyScore}
              type={'number'}
            />
          </div>
          <label className="image-button" htmlFor="image-button">
            <input
              style={{display: 'none'}}
              ref={imageMainRef}
              onChange={onChangeMainImage}
              type="file"
              accept="image/*"
              id="image-button"
            />
            <span>대표 이미지 등록</span>
          </label>
          {escapeRoom.mainImage ? (
            <PicSortComponent
              images={[escapeRoom.mainImage]}
              onSortEnd={onSortEnd}
              onDelete={onClickRemoveMainImage}
              height={399}
              width={287}
              mwidth={287}
              mheight={399}
            />
          ) : (
            <div className="image-skeleton" />
          )}
          <label className="image-button" htmlFor="image-button2">
            <input
              style={{display: 'none'}}
              ref={imageRef}
              onChange={onChangeImage}
              multiple
              type="file"
              accept="image/*"
              id="image-button2"
            />
            <span>이미지 등록</span>
          </label>
          {escapeRoom.images?.length ? (
            <PicSortComponent
              images={escapeRoom.images}
              onSortEnd={onSortEnd}
              onDelete={onClickRemoveSubImage}
              height={399}
              width={287}
              mwidth={287}
              mheight={399}
            />
          ) : (
            <div className="image-skeleton" />
          )}
        </div>
        {escapeRoom.idx === -1 ? (
          <Button
            className="n-btn"
            size="large"
            variant="contained"
            onClick={onClickSubmit}>
            {loading ? (
              <CircularProgress size={24} style={{color: 'white'}} />
            ) : (
              '등록'
            )}
          </Button>
        ) : (
          <Button
            className="n-btn"
            size="large"
            variant="contained"
            onClick={onClickSubmit}>
            {loading ? (
              <CircularProgress size={24} style={{color: 'white'}} />
            ) : (
              '수정'
            )}
          </Button>
        )}
      </NewsContainer>
      <Snackbar
        anchorOrigin={{vertical: snack.vertical, horizontal: snack.horizontal}}
        open={snack.open}
        onClose={handleSnackClose}
        message={snack.message}
        key={snack.vertical + snack.horizontal}
        sx={snack.sx}
      />
    </div>
  );
};

export default EscapeRoomModifyScreen;
