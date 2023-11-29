import {gql} from '@apollo/client';
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Header from 'components/Header';
import {NameNode, OperationDefinitionNode} from 'graphql';
import {Fragment, useEffect, useRef, useState} from 'react';
import {NewsContainer} from '../styles';
import axiosInstance from 'assets/apis/axiosInstance';
import {GQL_DOMAIN} from 'assets/utils/ENV';
import {ISanck} from 'types/type';
import {useRouter} from 'next/router';
import PicSortComponent from 'components/Sort';
import {arrayMoveMutable} from 'array-move';
import Axios from 'axios';

interface ISignedData {
  url: string;
  key: string;
  list_order: number;
}

interface INewsCategory {
  idx: number;
  title: string;
}

interface INews {
  idx: number;
  category_idx: number;
  title: string;
  content: string;
  created_at: Date;
  images: Array<INewsImage>;
}

interface INewsImage {
  idx?: number;
  file?: File;
  key: string;
  list_order: number;
}

interface INewDeatilData {
  categories: Array<INewsCategory>;
  news: INews;
}

interface IProps {
  data: INewDeatilData | undefined;
}

// modifiyNews(idx: Int, category_idx: Int! title: String!, content: String!

const gquery = `
    mutation modifiyNews($news:NewsInput!) {
        modifiyNews(news:$news) {
            status
            token
            data {
                idx
                category_idx
                title
                content
                created_at
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

const NewsModifyScreen = ({data}: IProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<INews>(
    data?.news ?? {
      idx: -1,
      category_idx: 1,
      title: '',
      content: '',
      created_at: new Date(),
      images: [],
    },
  );
  const isMobile = useMediaQuery('(max-width : 576px)');

  const onChangeCategory = (e: SelectChangeEvent<number>) => {
    news.category_idx = Number(e.target.value);
    setNews({
      ...news,
    });
  };
  const onChangeTitle = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    news.title = e.target.value;
    setNews({
      ...news,
    });
  };

  const onChangeContent = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    news.content = e.target.value;
    setNews({
      ...news,
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
    if (!news.title) {
      openSnack('뉴스 제목을 입력해주세요');
      return;
    }
    if (!news.content) {
      openSnack('뉴스 내용을 입력해주세요');
      return;
    }

    setLoading(true);
    const imageLogic = await uploadImage();
    if (!imageLogic) {
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
          news: {
            idx: news.idx,
            category_idx: news.category_idx,
            title: news.title,
            content: news.content,
            images: news.images,
          },
        },
      });

      if (data.data[value].status === 200) {
        const result = data.data[value].data;
        setNews(result);
        if (news.idx === -1) {
          router.replace(`/admin/news/modify?idx=${result.idx}`);
          openSnack('뉴스 생성 완료');
        } else {
          openSnack('뉴스 수정 완료');
        }
      } else {
        openSnack('뉴스 생성주 오류 발생');
      }
      // await awaitTimer(1500)
      // router.push({
      //     pathname: '/admin/news'
      // })
    } catch (e) {
      openSnack('뉴스 생성주 오류 발생');
    }
    setLoading(false);
  };

  const uploadImage = async (): Promise<boolean> => {
    const exts = news.images
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
          type: 'news',
        },
      });

      const result = data.data[value].data as Array<ISignedData>;
      await Promise.all(
        result.map(async re => {
          const image = news.images[re.list_order];
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

  const awaitTimer = (ms: number) => new Promise(res => setTimeout(res, ms));

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    const sortingArray = [...news.images];
    arrayMoveMutable(sortingArray, oldIndex, newIndex);
    setNews({
      ...news,
      images: sortingArray.map((img, index) => {
        return {
          ...img,
          list_order: index,
        };
      }),
    });
  };

  const onClickRemoveSubImage = (index: number) => {
    news.images.splice(index, 1);
    setNews({
      ...news,
      images: news.images.map((img, idx) => {
        return {
          ...img,
          list_order: idx,
        };
      }),
    });
  };

  const imageRef = useRef<HTMLInputElement>(null);

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
          list_order: news.images.length + i,
          file,
        };
      }),
    );
    setNews({
      ...news,
      images: [...news.images, ...(mutationFiles as Array<INewsImage>)],
    });
    if (imageRef.current) {
      imageRef.current.value = '';
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
                뉴스
                <br />
                만들기
              </Fragment>
            ) : (
              '뉴스 만들기'
            )}
          </Typography>
        </div>
        <div className="n-field">
          <div className="title">
            <FormControl className="category">
              <InputLabel id="category">카테고리</InputLabel>
              <Select
                labelId="category"
                label="카테고리"
                value={news.category_idx}
                onChange={onChangeCategory}>
                {data?.categories.map((ca, key) => (
                  <MenuItem key={key} value={ca.idx}>
                    {ca.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              placeholder={'뉴스 제목을 입력해주세요.'}
              label="뉴스 제목"
              value={news.title}
              onChange={onChangeTitle}
            />
          </div>
          <TextField
            title="content"
            label="뉴스 내용"
            placeholder={'뉴스 내용을 입력해주세요.'}
            multiline
            rows={10}
            value={news.content}
            onChange={onChangeContent}
          />
          <label className="image-button" htmlFor="image-button">
            <input
              style={{display: 'none'}}
              ref={imageRef}
              onChange={onChangeImage}
              multiple
              type="file"
              accept="image/*"
              id="image-button"
            />
            <span>이미지 등록</span>
          </label>
          {news.images.length ? (
            <PicSortComponent
              images={news.images}
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
        {news.idx === -1 ? (
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

export default NewsModifyScreen;
