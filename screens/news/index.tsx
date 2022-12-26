import Header from "components/Header"
import HeadMeta from "components/Header/HeadMeta"
import { CustomTextFiled } from "components/TextField"
import { useEffect, useRef, useState } from "react"
import { color, size } from "styles/theme"
import { NewsContainer } from "./style"
import { InputAdornment, Table, TableHead, TableBody, TableRow, TableCell, Pagination, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router"
import Footer from "components/Footer"
import { NPaginationContainer } from "components/pagination"
import moment from 'moment'
import { gql } from "@apollo/client"
import { NameNode, OperationDefinitionNode } from "graphql"
import { GQL_DOMAIN } from "assets/utils/ENV"
import axiosInstance from "assets/apis/axiosInstance";

interface IMenu {
    name: string
    width?: string
    class: string
}
const menus: Array<IMenu> = [
    { name: 'NO', width: '20px', class: '' },
    { name: '카테고리', width: '100px', class: '' },
    { name: '제목', width: '', class: 'left' },
    { name: '작성일', width: '140px', class: 'left' },
    { name: '조회수', width: '100px', class: '' },
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



const NewsScreen = ({ data }: IProps) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState(data?.total_count ?? 0)
    const [list, setList] = useState<Array<INews>>(data?.list ?? [])
    const [keyword, setKeyword] = useState('')
    const [existScroll, setExistScroll] = useState(false)
    const onChangeKeyword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setKeyword(e.target.value)
    }
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current != null) {
            setExistScroll(ref.current.scrollHeight > ref.current.clientHeight)
        }
    }, [])

    const fetchNews = async (newPage: number, init: boolean = false) => {
        if (loading || (page === newPage && !init)) {
            return
        }
        setLoading(true)
        setPage(init ? 0 : newPage)
        try {
            const { data } = await axiosInstance(value)
                .post(`${GQL_DOMAIN}`, {
                    query: gquery,
                    variables: {
                        page: init ? 0 : newPage,
                        keyword: keyword
                    }
                })
            setList(data.data[value].data.list)
            if (init) {
                setTotalCount(data.data[value].data.total_count)
            }
        } catch (e) {
        }
        setLoading(false)
    }

    const isMobile = useMediaQuery(`(max-width : ${size.mobile}px)`);

    return <div ref={ref} style={{ marginRight: existScroll ? 0 : 0 }}>
        <HeadMeta title={`나빌레라 : 뉴스`} />
        <Header type={2} />
        <NewsContainer>
            <h1>
                <span>
                    NEWS
                    <div className="circle-cut" />
                </span>
            </h1>
            <div className="content-area">
                <div className="search-area">
                    <CustomTextFiled
                        value={keyword}
                        fullWidth={isMobile}
                        placeholder="검색어를 입력해주세요."
                        onChange={onChangeKeyword}
                        style={{ background: color.N10, height: 48 }}
                        InputProps={{
                            style: {
                                height: 48
                            },
                            endAdornment: (
                                <InputAdornment position="start">
                                    <img src='svg/search.svg' />
                                </InputAdornment>
                            ),
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                fetchNews(0, true)
                            }
                        }}
                    />
                </div>
                <div className="list-area">
                    {isMobile ?
                        <ul>
                            {list.map((item, key) => <li key={key}>
                                <div className="list-mobile">
                                    <p>
                                        {item.title}
                                    </p>
                                    <p className="mobile-create">
                                        {moment(item.created_at).format('YYYY-MM-DD')}
                                    </p>
                                </div>
                            </li>)}
                        </ul> :
                        <Table>
                            <TableHead className="table-head">
                                <TableRow>
                                    {menus.map((menu, key) => <TableCell width={menu.width} className={`table-head-cell ${menu.class}`} key={key}>
                                        {menu.name}
                                    </TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody className="table-body">
                                {list.map((li, key) => <TableRow key={key} onClick={() => router.push(`/news/detail?idx=${li.idx}`)}>
                                    <TableCell className="table-body-cell index">
                                        {li.idx}
                                    </TableCell>
                                    <TableCell className="table-body-cell">
                                        {li.category}
                                    </TableCell>
                                    <TableCell className="table-body-cell left">
                                        {li.title}
                                    </TableCell>
                                    <TableCell className="table-body-cell left light">
                                        {moment(li.created_at).format('YYYY-MM-DD')}
                                    </TableCell>
                                    <TableCell className="table-body-cell light">
                                        {li.views}
                                    </TableCell>
                                </TableRow>)}
                            </TableBody>
                        </Table>}
                </div>
                <NPaginationContainer className="list-page">
                    <Pagination page={page + 1} count={totalCount} variant="outlined" shape="rounded" onChange={(e, page) => fetchNews(page - 1)} />
                </NPaginationContainer>
            </div>
        </NewsContainer>
        <Footer />
    </div>
}

export default NewsScreen