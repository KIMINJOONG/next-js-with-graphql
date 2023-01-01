import Footer from "components/Footer"
import Header from "components/Header"
import HeadMeta from "components/Header/HeadMeta"
import { Fragment, useEffect, useState } from "react"
import { DetailContainer } from "./style"
import { Button } from "@mui/material";
import { useRouter } from "next/router"
import Error from "next/error"
import moment from "moment"
import { CLOUD_FRONT } from "assets/utils/ENV"

interface INews {
    idx: number
    category_idx: number
    title: string
    content: string
    created_at: Date
    images: Array<INewsImage>
}

interface INewsImage {
    idx: number
    key: string
    list_order: number
}

interface IProps {
    data?: INews
}

// url 정규식
const rUrlRegex = /(?:(?:(https?|ftp|telnet):\/\/|[\s\t\r\n\[\]\`\<\>\"\'])((?:[\w$\-_\.+!*\'\(\),]|%[0-9a-f][0-9a-f])*\:(?:[\w$\-_\.+!*\'\(\),;\?&=]|%[0-9a-f][0-9a-f])+\@)?(?:((?:(?:[a-z0-9\-가-힣]+\.)+[a-z0-9\-]{2,})|(?:[\d]{1,3}\.){3}[\d]{1,3})|localhost)(?:\:([0-9]+))?((?:\/(?:[\w$\-_\.+!*\'\(\),;:@&=ㄱ-ㅎㅏ-ㅣ가-힣]|%[0-9a-f][0-9a-f])+)*)(?:\/([^\s\/\?\.:<>|#]*(?:\.[^\s\/\?:<>|#]+)*))?(\/?[\?;](?:[a-z0-9\-]+(?:=[^\s:&<>]*)?\&)*[a-z0-9\-]+(?:=[^\s:&<>]*)?)?(#[\w\-]+)?)/gmi;

const NewsDetail = ({ data }: IProps) => {
    if(!data) {
        return <Error statusCode={404}/>
    }

    const [news, setNews] = useState(data)

    useEffect(() => {
        const hrefList = data.content.match(rUrlRegex)
        let replaceStr = news.content
        hrefList?.forEach(li => {
            replaceStr = news.content.replaceAll(li, `<a href="${li}" target="_blank">${li}</a>`)
        })
        setNews({
            ...news,
            content: replaceStr
        })
    }, [])
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
                {news.images.map((img, idx) => {
                    if(idx === news.images.length - 1) {
                        return <div key={idx} style={{textAlign:'center'}}><img style={{marginTop: 40, marginBottom: 40}} src={CLOUD_FRONT + img.key}/></div>
                    }
                    return <div key={idx} style={{textAlign:'center'}}><img style={{marginTop: 40}} src={CLOUD_FRONT + img.key}/></div>
                })}
                <div className="content-item">
                    <div className="content-margin" dangerouslySetInnerHTML={ {__html: news.content} } />
                    {/* <div className="content-margin">{news.content}</div> */}
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