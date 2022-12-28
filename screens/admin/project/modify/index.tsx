import { gql } from "@apollo/client";
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material"
import Header from "components/Header"
import { NameNode, OperationDefinitionNode } from "graphql";
import { Fragment, useEffect, useRef, useState } from "react";
import { ProjectsContainer } from "../styles"
import axiosInstance from "assets/apis/axiosInstance";
import { CLOUD_FRONT, GQL_DOMAIN } from "assets/utils/ENV";
import { ISanck } from "types/type";
import { useRouter } from "next/router";

interface ITypes {
    idx: number
    name: string
}


interface IProject {
    idx: number
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
    idx: number
    bucket: string
    key: string
    list_order: number
}

interface IProjectData {
    types: Array<ITypes>
    project: IProject
}

interface IProps {
    data: IProjectData | undefined
}

// modifiyNews(idx: Int, category_idx: Int! title: String!, content: String!

const gquery = `
    mutation modifiyProject($idx:Int, $category_idx:Int!, $title: String!, $content: String!) {
        modifiyProject(idx:$idx, category_idx:$category_idx, title:$title, content: $content) {
            status
            token
            data {
                idx
                category_idx
                title
                content
                created_at
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


const ProjectModifyScreen = ({ data }: IProps) => {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState<IProject>(data?.project ?? {
        idx: -1,
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
        setLoading(true)
        const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
        const { value } = innerQuery.name as NameNode;

        try {
            const { data } = await axiosInstance(value)
                .post(`${GQL_DOMAIN}`, {
                    query: gquery,
                    variables: {
                        project
                    }
                })

            const result = data.data[value].data
            setProject(result)
            if (project.idx === -1) {
                router.replace(`/admin/project/modify?idx=${result.idx}`)
                openSnack('뉴스 생성 완료')
            } else {
                openSnack('뉴스 수정 완료')
            }
            setStep(1)
        } catch (e) {
            openSnack('뉴스 생성주 오류 발생')
        }
        setLoading(false)
    }

    const awaitTimer = (ms: number) => new Promise(res => setTimeout(res, ms))

    const mainImageRef = useRef<HTMLInputElement>(null);

    const uploadMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(121312)
        const files = e.target.files
        console.log(files)
        console.log(mainImageRef.current)
        if(mainImageRef.current) {
            mainImageRef.current.value = ''
        }
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
                {step ? <Fragment>
                    <div className="main-image">
                        {project.images.length ? (
                            project.images[0].list_order ? <label htmlFor="main-image">
                                <input style={{ display: "none" }} ref={mainImageRef} onChange={uploadMainImage} type="file" accept="image/*" id="main-image" />
                                <div className="main-image-skeleton"></div>
                            </label> : <img src={CLOUD_FRONT + project.images[0].key}/>
                        ) : <Fragment>
                            <label htmlFor="main-image">
                                <input style={{ display: "none" }} ref={mainImageRef} onChange={uploadMainImage} type="file" accept="image/*" id="main-image" />
                                <div className="main-image-skeleton"></div>
                            </label>
                        </Fragment>}
                    </div>
                    <div className="sub-image">

                    </div>
                </Fragment> :
                <Fragment>
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
                </Fragment>
                }
            </div>
            {step ? <div>12313</div> : <Fragment>
                {project.idx === -1 ?
                    <Button className="n-btn" size="large" variant="contained" onClick={onClickSubmit}>{loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : '등록'}</Button>
                    :
                    <Button className="n-btn" size="large" variant="contained" onClick={onClickSubmit}>{loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : '수정'}</Button>
                }    
            </Fragment>}
            

        </ProjectsContainer>
        <Snackbar anchorOrigin={{ vertical: snack.vertical, horizontal: snack.horizontal }} open={snack.open} onClose={handleSnackClose} message={snack.message} key={snack.vertical + snack.horizontal} sx={snack.sx} />
    </div>
}

export default ProjectModifyScreen