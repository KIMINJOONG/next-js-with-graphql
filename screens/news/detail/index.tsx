import Footer from "components/Footer"
import Header from "components/Header"
import HeadMeta from "components/Header/HeadMeta"
import { Fragment } from "react"
import { DetailContainer } from "./style"
import { Button } from "@mui/material";
import { useRouter } from "next/router"
import Error from "next/error"
import moment from "moment"

interface INews {
    idx: number
    category_idx: number
    title: string
    content: string
    created_at: Date
}

interface IProps {
    data?: INews
}

const NewsDetail = ({ data }: IProps) => {
    if(!data) {
        return <Error statusCode={404}/>
    }
    const router = useRouter()
    return <Fragment>
        <HeadMeta title={`나빌레라 : ${data?.title}`} />
        <Header type={2} />
        <DetailContainer>
            <h1>
                <span>
                    NEWS
                    <div className="circle-cut" />
                </span>
            </h1>
            <div className="content-area">
                <div className="content-title">
                    <h2>{data.title}</h2>
                    <p>
                        {moment(data.created_at).format('YYYY-MM-DD')}
                    </p>
                </div>
                <div className="content-item">
                    <div className="content-margin">{data.content}</div>
                </div>
            </div>
            <div className="button-area">
                <Button className="button" variant="outlined" onClick={() => router.push('/news?type=2')}>
                    목록으로
                </Button>
            </div>

        </DetailContainer>
        <Footer />
    </Fragment>
}

export default NewsDetail