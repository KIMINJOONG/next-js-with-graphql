import { CLOUD_FRONT } from "assets/utils/ENV"
import Footer from "components/Footer"
import Header from "components/Header"
import HeadMeta from "components/Header/HeadMeta"
import Error from "next/error"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { ProjectContainer } from "./style"


interface IProps {
    query: IProjectQuery
    params: object
    data?: IProjectData
}

interface IProjectQuery {
    type?: number
}

interface IProjectData {
    types: Array<IType>
    projects: Array<IProject>
}

interface IImage {
    idx: number
    key: string
    list_order: number
}

interface IType {
    idx: number
    name: string
}

interface IProject {
    id: number
    type_idx: number
    type: IType
    title: string
    sub_title: string
    when: string
    location: string
    organizer: string
    operate?: string
    support?: string
    images: Array<IImage>
}

const ProjectScreen = ({ query = {}, params = {}, data }: IProps) => {
    if(!data) {
        <Error statusCode={500}/>
    }
    const router = useRouter()
    const [tab, setTab] = useState<number>(query.type ? Number(query.type) : 1)
    const onClickTab = (tab: number) => {

        router.push(`/project?type=${tab}`)
    }

    useEffect(() => {
        setTab(Number(query.type))
    }, [query.type])

    return <Fragment>
        <HeadMeta title={`나빌레라 : ${data?.types.find(item => item.idx === tab)?.name}`} />
        <Header type={1} />
        <ProjectContainer>
            <h1>
                <span>
                    {data?.types.find(item => item.idx === tab)?.name}
                    <div className="circle-cut" />
                </span>
            </h1>
            <ul className="tab-nav">
                {data?.types.map((item, key) => <li key={key}>
                    <a className={`${item.idx === tab ? 'active' : ''}`} onClick={() => onClickTab(item.idx)}>
                        {item.name}
                    </a>
                </li>)}
            </ul>
            <section className="tab-content">
                {data?.projects.map((po, key) => {
                    if(po.type_idx !== tab) {
                        return <Fragment key={key}/>
                    }
                    return <div key={key} className="tab-content-item">
                        <img src={CLOUD_FRONT + po.images[0].key} />
                        <div className="poster-content">
                            <div className="poster-title">
                                <p>
                                    {po.sub_title}
                                </p>
                                <h2>
                                    {po.title}
                                </h2>
                                <ul className="poster-category">
                                    <li>
                                        <span className="sub-title">일시</span>
                                        <span className="divider" />
                                        <span className="sub-content">
                                            {po.when}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sub-title">장소</span>
                                        <span className="divider" />
                                        <span className="sub-content">
                                            {po.location}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="sub-title">주최/주관</span>
                                        <span className="divider" />
                                        <span className="sub-content">
                                            {po.organizer}
                                        </span>
                                    </li>
                                    {po.operate && <li>
                                        <span className="sub-title">운영</span>
                                        <span className="divider" />
                                        <span className="sub-content">
                                            {po.operate}
                                        </span>
                                    </li>}
                                    {po.support && <li>
                                        <span className="sub-title">후원</span>
                                        <span className="divider" />
                                        <span className="sub-content">
                                            {po.support}
                                        </span>
                                    </li>}

                                </ul>
                            </div>
                            <div className="content-images">
                                {po.images.map((im, key2) => {
                                    if(im.list_order === 0) {
                                        return <Fragment key={key2}/>
                                    }
                                    return <img key={key2} src={CLOUD_FRONT + im.key} />
                                })}
                            </div>
                        </div>
                    </div>
                })}
            </section>
        </ProjectContainer>
        <Footer />
    </Fragment>
}

export default ProjectScreen