import { gql } from "@apollo/client";
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material"
import Header from "components/Header"
import { NameNode, OperationDefinitionNode } from "graphql";
import { Fragment, useEffect, useState } from "react";
import { NewsContainer } from "../styles"
import axiosInstance from "assets/apis/axiosInstance";
import { GQL_DOMAIN } from "assets/utils/ENV";
import { ISanck } from "types/type";
import { useRouter } from "next/router";

interface INewsCategory {
    idx: number
    title: string
}


interface INews {
    idx: number
    category_idx: number
    title: string
    content: string
    created_at: Date
}

interface INewDeatilData {
    categories: Array<INewsCategory>
    news: INews
}

interface IProps {
    data: INewDeatilData | undefined
}

// modifiyNews(idx: Int, category_idx: Int! title: String!, content: String!

const gquery = `
    mutation modifiyNews($idx:Int, $category_idx:Int!, $title: String!, $content: String!) {
        modifiyNews(idx:$idx, category_idx:$category_idx, title:$title, content: $content) {
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


const NewsModifyScreen = ({ data }: IProps) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [news, setNews] = useState<INews>(data?.news ?? {
        idx: -1,
        category_idx: 1,
        title: '',
        content: '',
        created_at: new Date()
    })
    const isMobile = useMediaQuery('(max-width : 576px)');

    const onChangeCategory = (e: SelectChangeEvent<number>) => {
        news.category_idx = Number(e.target.value)
        setNews({
            ...news
        })
    }
    const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        news.title = e.target.value
        setNews({
            ...news
        })
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        news.content = e.target.value
        setNews({
            ...news
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
        if (!news.title) {
            openSnack('뉴스 제목을 입력해주세요')
            return
        }
        if (!news.content) {
            openSnack('뉴스 내용을 입력해주세요')
            return
        }
        setLoading(true)
        const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
        const { value } = innerQuery.name as NameNode;

        try {
            const { data } = await axiosInstance(value)
                .post(`${GQL_DOMAIN}`, {
                    query: gquery,
                    variables: news
                })

            const result = data.data[value].data
            setNews(result)
            if (news.idx === -1) {
                router.replace(`/admin/news/modify?idx=${result.idx}`)
                openSnack('뉴스 생성 완료')
            } else {
                openSnack('뉴스 수정 완료')
            }
            await awaitTimer(1500)
            router.push({
                pathname: '/admin/news'
            })
        } catch (e) {
            openSnack('뉴스 생성주 오류 발생')
        }
        setLoading(false)
    }

    const awaitTimer = (ms: number) => new Promise(res => setTimeout(res, ms))

    return <div>
        <Header />
        <NewsContainer>
            <div className="n-title">
                <Typography variant="h1">{isMobile ? <Fragment>
                    뉴스<br />만들기
                </Fragment> : '뉴스 만들기'}</Typography>
            </div>
            <div className="n-field">
                <div className="title">
                    <FormControl className="category">
                        <InputLabel id="category">카테고리</InputLabel>
                        <Select
                            labelId="category"
                            label="카테고리"
                            value={news.category_idx}
                            onChange={onChangeCategory}
                        >
                            {data?.categories.map((ca, key) => <MenuItem key={key} value={ca.idx}>{ca.title}</MenuItem>)}
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
            </div>
            {news.idx === -1 ?
                <Button className="n-btn" size="large" variant="contained" onClick={onClickSubmit}>{loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : '등록'}</Button>
                :
                <Button className="n-btn" size="large" variant="contained" onClick={onClickSubmit}>{loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : '수정'}</Button>
            }

        </NewsContainer>
        <Snackbar anchorOrigin={{ vertical: snack.vertical, horizontal: snack.horizontal }} open={snack.open} onClose={handleSnackClose} message={snack.message} key={snack.vertical + snack.horizontal} sx={snack.sx} />
    </div>
}

export default NewsModifyScreen