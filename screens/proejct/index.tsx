import Footer from "components/Footer"
import Header from "components/Header"
import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { ProjectContainer } from "./style"

const tabs = ['공연', '축제 및 행사', '극장']

interface IProps {
    query: IProjectQuery
    params: object
    data?: object
}

interface IProjectQuery {
    type?: number
}

interface IProject {
    id: number
    title: string
    sub_title: string
    when: string
    location: string
    organizer: string
    operate?: string
    support?: string
    images: Array<number>
}
const posters: Array<Array<IProject>> = [
    [
        {
            id: 1,
            title: '별의 아이 - 홍성 이야기',
            sub_title: '드로잉 참여형 아동극',
            when: '2022년11월5일',
            location: '나빌레라 소극장',
            organizer: '나빌레라',
            support: '홍성군',
            images: [1, 2, 3, 4]
        },
        {
            id: 2,
            title: '해어화,만향 - 홍성 이야기',
            sub_title: '야간형 장소특정형 공연',
            when: '2022년',
            location: '안회당, 여하정',
            organizer: '나빌레라',
            support: '사회적기업진흥원, 홍성군, 홍주문화관광재단, 홍성군 문화특화사업단',
            images: [1, 2, 3, 4]
        },
        {
            id: 3,
            title: '김좌진 장군과 함께 청산리 속으로 - 홍성 이야기',
            sub_title: '참여형 연극',
            when: '2020년 ~ 2022년',
            location: '초등학교 및 야외',
            organizer: '나빌레라',
            images: [1, 2, 3]
        },
    ],
    [
        {
            id: 4,
            title: '골목대장 히어로',
            sub_title: '지역개발형 축제',
            when: '2022년',
            location: '(구)홍고통 일대',
            organizer: '홍성군 문화특화사업단/나빌레라',
            support: '충청남도, 홍성군, 홍성군 도시재생지원센터, 홍성군 마을만들기 지원센터',
            images: [1, 2, 3, 4]
        },
        {
            id: 5,
            title: '추억을 훔쳐간 범인을 찾아라',
            sub_title: '야외형 스토리형 미션 체험 프로그램',
            when: '2021년',
            location: '(구)홍고통 일대',
            organizer: '나빌레라',
            support: '홍성군, 홍성군 도시재생지원센터',
            images: [1, 2, 3, 4]
        },
        {
            id: 6,
            title: '온라인 콘텐츠 제작',
            sub_title: '홍성역사인물축제',
            when: '2021년',
            location: '온라인 및 홍주성 일대',
            organizer: '홍성군/홍성역사인물축제추진위원회',
            images: [1, 2, 3]
        },
    ],
    [
        {
            id: 7,
            title: '애들아 역사 탈출할래?',
            sub_title: '꿈다락 토요문화학교',
            when: '2021년, 2022년',
            location: '나빌레라 소극장',
            organizer: '문화체육관광부, 충청남도/충남문화재단',
            operate: '나빌레라',
            support: '홍성군 문화특화사업단',
            images: [1, 2, 3, 4]
        },
        {
            id: 8,
            title: '청소년 웹드라마 제작단',
            sub_title: '청소년 웹드라마 제작단',
            when: '2022년',
            location: '나빌레라 소극장',
            organizer: '홍성군 가족센터',
            operate: '나빌레라',
            images: [1, 2, 3, 4]
        },
        {
            id: 9,
            title: '비긴어게인 in 홍성',
            sub_title: '군민과 함께하는 공연',
            when: '2022년',
            location: '나빌레라 소극장',
            organizer: '홍성군 문화특화사업단/나빌레라',
            images: [1, 2, 3, 4]
        },
        {
            id: 10,
            title: '나도 영화감독',
            sub_title: '청소년 예술교육',
            when: '2021년',
            location: '나빌레라 소극장',
            organizer: '홍성군 문화특화사업단/나빌레라',
            images: [1, 2, 3]
        },
    ],
]

const ProjectScreen = ({ query = {}, params = {} }: IProps) => {

    const router = useRouter()
    const [tab, setTab] = useState<number>(query.type ? Number(query.type) : 1)

    const onClickTab = (tab: number) => {
        setTab(tab)
        router.push(`/project?type=${tab}`)
    }

    return <Fragment>
        <Header />
        <ProjectContainer>
            <h1>
                <span>
                    {tabs[tab - 1]}
                    <div className="circle-cut" />
                </span>
            </h1>
            <ul className="tab-nav">
                {tabs.map((item, key) => <li key={key}>
                    <a className={`${key + 1 === tab ? 'active' : ''}`} onClick={() => onClickTab(key + 1)}>
                        {item}
                    </a>
                </li>)}
            </ul>
            <section className="tab-content">
                {posters[tab - 1].map((po, key) => <div key={key} className="tab-content-item">
                    <img src={`images/poster/main/${po.id}/poster.png`} />
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
                            {po.images.map((im, key2) => <img key={key2} src={`images/poster/detail/${po.id}/detail-${im}.png`} />)}
                        </div>
                    </div>
                </div>)}
            </section>
        </ProjectContainer>
        <Footer />
    </Fragment>
}

export default ProjectScreen