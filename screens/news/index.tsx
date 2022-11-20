import Header from "components/Header"
import HeadMeta from "components/Header/HeadMeta"
import { CustomTextFiled } from "components/TextField"
import { Fragment, useState } from "react"
import { color } from "styles/theme"
import { NewsContainer } from "./style"
import { InputAdornment, Table, TableHead, TableBody, TableRow, TableCell, Pagination } from "@mui/material";
import { useRouter } from "next/router"
import Footer from "components/Footer"

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

const NewsScreen = () => {

    const router = useRouter()
    const [keyword, setKeyword] = useState('')
    const onChangeKeyword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    return <Fragment>
        <HeadMeta title={`나빌레라 : 뉴스`} />
        <Header />
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
                    />
                </div>
                <div className="list-area">
                    <Table>
                        <TableHead className="table-head">
                            <TableRow>
                                {menus.map((menu, key) => <TableCell width={menu.width} className={`table-head-cell ${menu.class}`} key={key}>
                                    {menu.name}
                                </TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            <TableRow onClick={() => router.push('/news/detail?type=2&id=1')}>
                                <TableCell className="table-body-cell index">
                                    20
                                </TableCell>
                                <TableCell className="table-body-cell">
                                    언론보도
                                </TableCell>
                                <TableCell className="table-body-cell left">
                                    [춘천사람들] [취재기자 현장 인터뷰] (사)강원살이 청년이 행복한 춘천을 꿈꾼다
                                </TableCell>
                                <TableCell className="table-body-cell left light">
                                    2020-10-29
                                </TableCell>
                                <TableCell className="table-body-cell light">
                                    1213
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="table-body-cell index">
                                    20
                                </TableCell>
                                <TableCell className="table-body-cell">
                                    언론보도
                                </TableCell>
                                <TableCell className="table-body-cell left">
                                    [춘천사람들] [취재기자 현장 인터뷰] (사)강원살이 청년이 행복한 춘천을 꿈꾼다
                                </TableCell>
                                <TableCell className="table-body-cell left light">
                                    2020-10-29
                                </TableCell>
                                <TableCell className="table-body-cell light">
                                    1213
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="table-body-cell index">
                                    20
                                </TableCell>
                                <TableCell className="table-body-cell">
                                    언론보도
                                </TableCell>
                                <TableCell className="table-body-cell left">
                                    [춘천사람들] [취재기자 현장 인터뷰] (사)강원살이 청년이 행복한 춘천을 꿈꾼다
                                </TableCell>
                                <TableCell className="table-body-cell left light">
                                    2020-10-29
                                </TableCell>
                                <TableCell className="table-body-cell light">
                                    1213
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="page-area">
                    <Pagination page={1} count={10} variant="outlined" shape="rounded" onChange={(e) => console.log(e)} />
                </div>
            </div>
        </NewsContainer>
        <Footer />
    </Fragment>
}

export default NewsScreen