import Footer from "components/Footer"
import Header from "components/Header"
import HeadMeta from "components/Header/HeadMeta"
import { Fragment } from "react"
import { DetailContainer } from "./style"
import { Button } from "@mui/material";
import { useRouter } from "next/router"

const NewsDetail = () => {
    const router = useRouter()
    return <Fragment>
        <HeadMeta title={`나빌레라 : 제목`} />
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
                    <h2>
                        [춘천사람들] [취재기자 현장 인터뷰] (사)강원살이 청년이 행복한 춘천을 꿈꾼다
                    </h2>
                    <p>
                        2020-10-29
                    </p>
                </div>
                <div className="content-item">
                    <div className="content-margin">
                        세계 최대 석유 산유국 사우디아라비아의 실권자이자 세계 최고 부호죠.무함마드 빈 살만 왕세자가 내일 방한합니다.<br /><br />

                        지난 2019년 방한 때 10조원 투자를 결정했던 만큼, 이번 방한에 재계의 기대감이 높은데요.<br />
                        오늘의 그래픽 뉴스, {'<최고 갑부 빈 살만 방한>'}입니다.빈 살만 왕세자는 발리에서 열리는 G20 정상회의에 참석한 뒤 곧바로 한국으로 향할 예정입니다.<br />
                        17일 도착해서 1박 2일간 머무르게 되는데요.<br /><br />

                        정확한 일정은 비공개지만, 이재용 삼성전자 회장과 최태원 SK그룹 회장, 정의선 현대차그룹 회장 등 재계 주요 총수와 최고경영자들이 빈 살만 왕세자를 만날 것으로 알려졌습니다.<br />
                        사우디 아라비아 국왕의 아들인 빈 살만 왕세자는 2015년 국방장관과 2017년 부총리에 오르며 사우디아라비아의 경제와 안보를 총괄하고 있는데요.<br />
                        무소불위의 권력과 부를 지녀서 '미스터 에브리싱', 즉 '모든 게 가능한 남자'라는 별명을 갖고 있습니다.<br /><br />

                        국내에서는 '만수르보다 10배 부자'라는 칭호로 유명하죠.<br /><br />

                        빈 살만은 재산이 2조 달러, 약 2,638조 원으로 추정되는 세계 최고 부호인데요.
                    </div>
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