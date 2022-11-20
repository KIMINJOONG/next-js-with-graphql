import Header from "components/Header"
import HeadMeta from "components/Header/HeadMeta"
import { CustomTextFiled } from "components/TextField"
import { Fragment } from "react"
import { color } from "styles/theme"
import { NewsContainer } from "./style"
import { InputAdornment, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";


const NewsScreen = () => {
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
                        placeholder="검색어를 입력해주세요."
                        onChange={e => console.log(e)}
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
                        <TableHead>

                        </TableHead>
                    </Table>
                </div>
            </div>
        </NewsContainer>
    </Fragment>
}

export default NewsScreen