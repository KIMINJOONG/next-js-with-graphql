import { gql } from "@apollo/client";
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material"
import Header from "components/Header"
import { NameNode, OperationDefinitionNode } from "graphql";
import { Fragment, MouseEvent, useRef, useState } from "react";
import { ProjectsContainer } from "../styles"
import axiosInstance from "assets/apis/axiosInstance";
import { CLOUD_FRONT, GQL_DOMAIN } from "assets/utils/ENV";
import { ISanck } from "types/type";
import { useRouter } from "next/router";
import Axios from 'axios'
import { autoHideDuration } from "constants/size";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PicSortComponent from "components/Sort";
import { arrayMoveMutable } from 'array-move';
import Error from "next/error";

interface ITypes {
    idx: number
    name: string
}


interface IProject {
    idx?: number
    type_idx: number
    title: string
    sub_title: string
    when: string
    location: string
    organizer: string
    operate?: string
    support?: string
    images: Array<IImage>
}

interface IImage {
    idx?: number
    bucket?: string
    key: string
    list_order: number
    file?: File
}

interface IProjectData {
    types: Array<ITypes>
    project: IProject
}

interface IProps {
    data: IProjectData | undefined
}

interface ISignedData {
    url: string
    key: string
    list_order: number
}

// modifiyNews(idx: Int, category_idx: Int! title: String!, content: String!

const gquery = `
    mutation modifiyProject($project: ProjectInput!) {
        modifiyProject(project:$project) {
            status
            token
            data {
                idx
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
        `

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
`
const preQuery = gql`${preSignedQuery}`

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

const ProjectModifyScreen = ({ data }: IProps) => {
    const router = useRouter()
    if(router.query.idx && !data) {
        return <Error statusCode={404}/>
    }
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState<IProject>(data?.project ?? {
        type_idx: 1,
        title: '',
        sub_title: '',
        when: '',
        location: '',
        organizer: '',
        operate: '',
        support: '',
        images: []
    })

    

    const isMobile = useMediaQuery('(max-width : 576px)');

    const onChangeType = (e: SelectChangeEvent<number>) => {
        project.type_idx = Number(e.target.value)
        setProject({
            ...project
        })
    }
    const onChangeData = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, type: string) => {
        (project as any)[type] = e.target.value
        setProject({
            ...project
        })
    }

    const [snack, setSnack] = useState<ISanck>({
        open: false,
        vertical: "bottom",
        horizontal: "left",
        message: "",
        // sx: { "& .MuiSnackbarContent-root": { backgroundColor: "green" } }
        sx: {}
    });

    const openSnack = (message: string) => {
        setSnack({ ...snack, open: true, message: message });
    };

    const handleSnackClose = () => {
        setSnack({ ...snack, open: false, message: "" });
    };

    const onClickSubmit = async () => {
        if (loading) {
            return
        }
        if (!project.title) {
            openSnack('제목을 입력해주세요')
            return
        }
        if (!project.sub_title) {
            openSnack('부 제목 입력해주세요')
            return
        }
        if (!project.when) {
            openSnack('일시를 입력해주세요')
            return
        }
        if (!project.location) {
            openSnack('장소를 입력해주세요')
            return
        }
        if (!project.location) {
            openSnack('주최/주관을 입력해주세요')
            return
        }
        if(project.images.length) {
            if(project.images[0].list_order) {
                openSnack('메인 이미지를 등록해주세요.')
                return
            }
        }
        if(project.images.length < 2) {
            openSnack('서브 이미지를 등록해주세요.')
            return
        }
        setLoading(true)
        const imageLogic = await uploadImage()
        if(!imageLogic) {
            setLoading(false)
            openSnack('이미지 등록중 오류 발생')
            return
        }
        const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
        const { value } = innerQuery.name as NameNode;

        try {
            const { data } = await axiosInstance(value)
                .post(`${GQL_DOMAIN}`, {
                    query: gquery,
                    variables: {
                        project : {
                            idx: project.idx,
                            type_idx: project.type_idx,
                            title: project.title,
                            sub_title: project.sub_title,
                            when: project.when,
                            location: project.location,
                            organizer: project.organizer,
                            operate: project.operate,
                            support: project.support,
                            images: project.images.map(img => {
                                return {
                                    idx: img.idx,
                                    key: img.key,
                                    list_order: img.list_order
                                }
                            })
                        }
                    }
                })

            const result = data.data[value]
            if(result.status === 200) {
                setProject({
                    ...project,
                    ...result.data
                })
                if (project.idx) {
                    openSnack('프로젝트 수정 완료')
                } else {
                    router.replace(`/admin/project/modify?idx=${result.idx}`)
                    openSnack('프로젝트 생성 완료')
                }
            } else {
                openSnack('프로젝트 생성중 오류 발생')
            }
            
        } catch (e) {
            openSnack('프로젝트 생성중 오류 발생')
        }
        setLoading(false)
    }

    const awaitTimer = (ms: number) => new Promise(res => setTimeout(res, ms))

    const mainImageRef = useRef<HTMLInputElement>(null);
    const subImageRef = useRef<HTMLInputElement>(null);

    const onChangeMainImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) {
            return
        }
        const result = await readFileAsync(files[0]);
        if(result) {
            project.images = [{key: result.toString(), list_order: 0, file: files[0]}, ...project.images.filter(img => img.list_order !== 0)]
            setProject({
                ...project
            })
        }
        if(mainImageRef.current) {
            mainImageRef.current.value = ''
        }
    }

    const onChangeSubImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) {
            return
        }
        const fileArray = Array.from(files)
        const mutationFiles = await Promise.all(
            fileArray.map(async (file, i) => {
              const result = await readFileAsync(file);
              return {
                key: result?.toString(),
                list_order: project.images.length === 0 ? 1 + i : project.images.length + i,
                file
              };
            })
          );
        project.images = [...project.images, ...(mutationFiles) as  Array<IImage>]
        setProject({
            ...project
        })
        if(subImageRef.current) {
            subImageRef.current.value = ''
        }
    }

    const uploadImage = async () : Promise<boolean> => {
        const exts = project.images.filter(img => img.file).map(item => {
            const name = item.file!.name;
            const lastDot = name.lastIndexOf('.');

            // const fileName = name.substring(0, lastDot);
            const ext = name.substring(lastDot + 1);
            return {
                ext,
                list_order: item.list_order
            }
        })

        if(!exts.length) {
            return true
        }

        const innerQuery = preQuery.definitions[0] as OperationDefinitionNode;
        const { value } = innerQuery.name as NameNode;
        try{
            const { data } = await axiosInstance(value)
            .post(`${GQL_DOMAIN}`, {
                query: preSignedQuery,
                variables: {
                    exts: exts
                }
            })

            const result = data.data[value].data as Array<ISignedData>
            await Promise.all(
                result.map(async(re) => {
                    const image = project.images[re.list_order]
                    await Axios({
                        url: re.url,
                        method: "PUT",
                        headers: {
                            "Content-Type": image.file?.type,
                        },
                        data: image.file,
                    });
                    image.key = re.key
                    delete image.file
                })
            )
            return true
        }catch(e) {
            
        }
        return false
    }

    const onClickRemoveMainImage = (e: MouseEvent<HTMLDivElement>) => {
        project.images = project.images.filter(img => img.list_order !== 0)
        setProject({
            ...project
        })
    }

    const onClickRemoveSubImage = (index:number) => {
        project.images.splice(index, 1)
        setProject({
            ...project,
            images: project.images.map((img, idx) => {
                return {
                    ...img,
                    list_order: idx
                }
            })
        })
    }

    const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
        const sortingArray = project.images.filter(img => img.list_order !== 0)
        arrayMoveMutable(sortingArray, oldIndex, newIndex);
        const concatArray = [project.images[0], ...sortingArray]
        setProject({
            ...project,
            images: concatArray.map((img, index) => {
                return {
                    ...img,
                    list_order: index
                }
            })
        })
    }

    return <div>
        <Header />
        <ProjectsContainer>
            <div className="n-title">
                <Typography variant="h1">{isMobile ? <Fragment>
                    프로젝트<br />만들기
                </Fragment> : '프로젝트 만들기'}</Typography>
            </div>
            <div className="n-field">
                <div className="title">
                    <FormControl className="category">
                        <InputLabel id="category">타입</InputLabel>
                        <Select
                            labelId="category"
                            label="타입"
                            value={project.type_idx}
                            onChange={onChangeType}
                        >
                            {data?.types.map((ca, key) => <MenuItem key={key} value={ca.idx}>{ca.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        placeholder={'제목을 입력해주세요.'}
                        label="제목"
                        value={project.title}
                        onChange={(e) => onChangeData(e, 'title')}
                    />
                </div>
                <TextField
                    title="content"
                    label="부 제목"
                    placeholder={'부 제목을 입력해주세요.'}
                    value={project.sub_title}
                    onChange={(e) => onChangeData(e, 'sub_title')}
                />
                <div style={{height: 20}}></div>
                <TextField
                    title="content"
                    label="일시"
                    placeholder={'일시를 입력해주세요.'}
                    value={project.when}
                    onChange={(e) => onChangeData(e, 'when')}
                />
                <div style={{height: 20}}></div>
                <TextField
                    title="content"
                    label="장소"
                    placeholder={'장소를 입력해주세요.'}
                    value={project.location}
                    onChange={(e) => onChangeData(e, 'location')}
                />
                <div style={{height: 20}}></div>
                <TextField
                    title="content"
                    label="주최/주관"
                    placeholder={'주최/주관을 입력해주세요.'}
                    value={project.organizer}
                    onChange={(e) => onChangeData(e, 'organizer')}
                />
                <div style={{height: 20}}></div>
                <TextField
                    title="content"
                    label="운영"
                    placeholder={'운영 기관을 입력해주세요.'}
                    value={project.operate ?? ''}
                    onChange={(e) => onChangeData(e, 'operate')}
                />
                <div style={{height: 20}}></div>
                <TextField
                    title="content"
                    label="후원"
                    placeholder={'후원자 및 기관을 입력해주세요.'}
                    value={project.support ?? ''}
                    onChange={(e) => onChangeData(e, 'support')}
                />
                <div className="main-image">
                    <h2>메인 이미지</h2>
                    <label className="image-button" htmlFor="main-image-button">
                        <input style={{ display: "none" }} ref={mainImageRef} onChange={onChangeMainImage} type="file" accept="image/*" id="main-image-button" />
                        <span>메인 이미지 등록</span>
                    </label>
                    {project.images.length ? (
                        project.images[0].list_order ? <div className="main-image-skeleton"></div> : <div className="main-image-skeleton">
                        <div className="remove" onClick={onClickRemoveMainImage}>
                            <HighlightOffIcon fontSize="large" />
                        </div>
                        <img src={project.images[0].file ? project.images[0].key : CLOUD_FRONT + project.images[0].key}/>
                    </div>
                    ) : <div className="main-image-skeleton"></div>}
                </div>
                <div className="sub-image">
                    <h2>서브 이미지</h2>
                    <label className="image-button" htmlFor="sub-image-button">
                        <input style={{ display: "none" }} ref={subImageRef} onChange={onChangeSubImage} multiple type="file" accept="image/*" id="sub-image-button" />
                        <span>서브 이미지 등록</span>
                    </label>
                        {project.images.filter(img => img.list_order !== 0).length ?
                            <PicSortComponent
                                images={project.images.filter(img => img.list_order !== 0)}
                                onSortEnd={onSortEnd}
                                onDelete={onClickRemoveSubImage}
                            />
                            : <div className="sub-image-row"><div className="sub-image-skeleton"/></div>
                        }
                </div>
            </div>
            <Button className="n-btn" size="large" variant="contained" onClick={onClickSubmit}>{loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : (project.idx ? '수정': '등록')}</Button>
        </ProjectsContainer>
        <Snackbar autoHideDuration={autoHideDuration} anchorOrigin={{ vertical: snack.vertical, horizontal: snack.horizontal }} open={snack.open} onClose={handleSnackClose} message={snack.message} key={snack.vertical + snack.horizontal} sx={snack.sx} />
    </div>
}

export default ProjectModifyScreen