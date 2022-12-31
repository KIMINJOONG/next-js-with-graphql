import { gql } from "@apollo/client";
import { Button, Dialog, DialogActions, DialogContent, Pagination, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import Header from "components/Header"
import { NPaginationContainer } from "components/pagination";
import { NameNode, OperationDefinitionNode } from "graphql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NewsContainer } from "./styles"
import { GQL_DOMAIN } from "assets/utils/ENV"
import axiosInstance from "assets/apis/axiosInstance";
import moment from "moment";

interface IMenu {
    name: string
}

const menus: Array<IMenu> = [
    { name: 'NO' },
    { name: '카테고리' },
    { name: '제목' },
    { name: '작성일' },
    { name: '' },
]

interface INews {
    idx: number
    category: string
    title: string
    views: number
    created_at: Date
}

interface INewsData {
    list: Array<INews>
    total_count: number
}

interface IProps {
    data: INewsData | undefined
}

const gquery = `
    query fetchNews($keyword: String, $page: Int) {
        fetchNews(keyword: $keyword, page: $page) {
            status
            data {
                list {
                    idx
                    category
                    title
                    views
                    created_at
                },
                total_count
            }
            token
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
const innerQuery = gqlQuery.definitions[0] as OperationDefinitionNode;
const { value } = innerQuery.name as NameNode;

const NewsScreen = () => {

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [list, setList] = useState<Array<INews>>([])

    useEffect(() => {
        fetchNews(0)
    }, [])

    const fetchNews = async (newPage: number) => {
        if (loading) {
            return
        }
        setLoading(true)
        setPage(newPage)
        try {
            const { data } = await axiosInstance(value)
                .post(`${GQL_DOMAIN}`, {
                    query: gquery,
                    variables: {
                        page: newPage,
                    }
                })
            setList(data.data[value].data.list)
            if (!newPage) {
                setTotalCount(data.data[value].data.total_count)
            }
        } catch (e) {
        }
        setLoading(false)
    }

    const router = useRouter()
    const [deleteIndex, setDeleteIndex] = useState(-1)

    const onClickDelete = async () => {
        if(deleteIndex < 0) {
            return
        }
        const dquery = `
            mutation deleteNews($idx: Int!) {
                deleteNews(idx: $idx) {
                    status
                    token
                    error {
                        remark
                        code
                        text
                    }
                }
            }
        `;

        const delQuery = gql`
                ${dquery}
            `
        const inQuery = delQuery.definitions[0] as OperationDefinitionNode;
        const { value } = inQuery.name as NameNode;
        try {
            const { data } = await axiosInstance(value)
                .post(`${GQL_DOMAIN}`, {
                    query: dquery,
                    variables: {
                        idx: deleteIndex,
                    }
                })
             
            if(data.data[value].status === 200) {
                const remove = list.filter((item) => item.idx !== deleteIndex)
                setDeleteIndex(-1)
                setList([
                    ...remove
                ])
            }
        } catch (e) {

        }
    }


    return <div>
        <Header />
        <NewsContainer>
            <div className="n-title">
                <Typography variant="h1">뉴스 관리</Typography>
                <Button variant="contained" size="large" onClick={() => router.push('/admin/news/modify')}>
                    새로운 뉴스 등록
                </Button>
            </div>
            <Table className="n-table">
                <TableHead className="table-head">
                    <TableRow>
                        {menus.map((menu, key) => <TableCell key={key}>
                            {menu.name}
                        </TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row, key) => <TableRow key={key}>
                        <TableCell>
                            {row.idx}
                        </TableCell>
                        <TableCell>
                            {row.category}
                        </TableCell>
                        <TableCell>
                            {row.title}
                        </TableCell>
                        <TableCell>
                            {moment(row.created_at).format('YYYY-MM-DD')}
                        </TableCell>
                        <TableCell>
                            <Button color="info" variant="contained" onClick={() => router.push(`/admin/news/modify?idx=${row.idx}`)}>
                                수정
                            </Button>
                            <Button color="error" variant="contained" onClick={() => setDeleteIndex(row.idx)}>
                                삭제
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
            <NPaginationContainer>
                <Pagination page={page + 1} count={totalCount} variant="outlined" shape="rounded" onChange={(e, page) => fetchNews(page - 1)} />
            </NPaginationContainer>
        </NewsContainer >
        <Dialog
            open={deleteIndex !== -1}
            onClose={() => setDeleteIndex(-1)}
        >
            <DialogContent>
                뉴스를 삭제하시겠어요?
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={() => setDeleteIndex(-1)}>아니오</Button>
                <Button variant="contained" onClick={onClickDelete}>예</Button>
            </DialogActions>
        </Dialog>
    </div >
}

export default NewsScreen