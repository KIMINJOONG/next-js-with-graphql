import Image from "next/image";
import styled from "styled-components";
import { color, media } from "styles/theme";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import moment, { min } from 'moment'


const MainSectionBottom = styled.section`
  height: 394px;
  background-image: url('images/main_bottom_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 67%;
`;

interface INews {
    title: string
    created_at: Date
}

interface IHistoryTitle {
    title: string
    histories: Array<IHistory>
}

interface IHistory {
    content: string
}

interface IHomeData {
    news: Array<INews>
    histories: Array<IHistoryTitle>
}

interface IProps {
    data: IHomeData | undefined
}

const Container = styled.div`
display: flex;
flex-direction: column;
padding-top:60px;
background-color: white;
`;

const TopSection = styled.section`
background-color: #F8F8F8;
height: 699px;
`;

const TopSectionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    position: relative;

    ${media.mobile} {
        max-width: 576px;
        overflow: hidden;
    }
`;

const HRContainer = styled.div`
z-index: 1;
`;

const HR = styled.hr`
    left: ${(props: { left: string, borderColor: string }) => props.left};
    height: calc(100% - 4px);
    border: 0.5px solid ${(props) => props.borderColor};
    position: absolute;

    ${media.mobile} {
        display: none;
    }
`;

const TopSectionContentContainer = styled.div`
    padding-top: 160px;
    z-index: 2;
    position: relative;

    ${media.mobile} {
        padding-top: 48px;
    }


`;

const TopSectionContentTitle = styled.p`
    font-size: 50px;
    font-weight: 600;

    ${media.mobile} {
        font-size: 32px;
    }
`;

const TopSectionContentDescriptionContainer = styled.div`
    margin-top: 28px;

    ${media.mobile} {
        font-size: 15px;
    }
`;

const TopSectionContentDescription = styled.p`
    font-size: 18px;
    font-weight: 300;
`;

const MainTextContainer = styled.div`
    position: absolute;
    top: -60px;
    right: 0px;
    margin-right: 104px;

    ${media.mobile} {
        top: -80px;
        right: -70px;
        margin-right: 0px;

    }
`;

const MainTextImage = styled(Image)`
    width: 254px;
    height: 259px;

    ${media.mobile} {
        width: 205px;
        height: 209px;
    }
`;

const MainImageContainer = styled.div`
    margin-top: 66px; 
    z-index: 2; 
    position: relative;
`;

const MainImage = styled(Image)`
    width: 1100px; 
    height: 438px;

    ${media.mobile} {
        width: 366px;
        height: 387px;
    }
`;

const MainBannerContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;

    ${media.mobile} {
        display: none;
    }
`;

const MainBanner = styled.div`
    padding: 36px 13px 121px 14px;
    background-color: ${color.brand};
`;

const MainBannerText = styled.span`
    text-orientation: sideways;
    writing-mode: vertical-lr;
    letter-spacing: 15px;
`;

const NewsSection = styled.section`
    height: 679px;

    ${media.mobile} {
        height: 914px;
    }
    
`;

const NewsSectionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 0;

    ${media.mobile} {
        max-width: 375px;
        flex-direction: column;
    }
`;

const NewsImageContainer = styled.div`
    margin-top: 288px;
    z-index: 2;
    position: relative;

    ${media.mobile} {
        order: 2;
        margin-top: 65px;
    }
`;

const NewsImage = styled(Image)`
    width: 367px;
    height: 477px;

    ${media.mobile} {
        margin-top: 65px;
        width: 256px;
        height: 333px;
    }
`;

const NewsContentContainer = styled.div`
    margin-left: 92px;
    margin-top: 304px;
    flex: 1;
    position: relative;
    z-index: 2;

    ${media.mobile} {
        margin-top: 71px;
        margin-left: 0px;
        padding: 0px 16px 0px 15px;
        order: 1;
    }
`;

const TextBadge = styled.i`
    position: absolute;
    top: -5px;
    left: -15px;
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background-color: ${color.brand};

    ${media.mobile} {
        left: 0px;
    }
`;

const NewsText = styled.span`
    font-size: 50px;
    z-index: 1;
    position: relative;

    ${media.mobile} {
        font-size: 32px;
    }
`;

const NewsContentUl = styled.ul`
    margin-top: 33px;
    z-index: 2;
    position: relative;
`;

const NewsContentLi = styled.li`
    display: flex;
    flex-direction: row;
    padding-top: ${(props: { index: number }) => props.index === 0 ? 0 : 15}px;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-style: solid;

    ${media.mobile} {
        flex-direction: column;
    }
`;

const NewsContentTitle = styled.p`
    flex: 1;
    font-size: 15px;
    font-weight: 300;
    color: ${color.N50};

    ${media.mobile} {
        font-size: 14px;
        font-weight: 400;

    }
`;

const NewsContentDate = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${color.N50};

    ${media.mobile} {
        margin-top: 8px;
        font-size: 12px;
        font-weight: 300;

    }
`;

const VisionSection = styled.section`
    background-color: ${color.N40};
`;

const VisionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    position: relative;
    height: 1152px;

    ${media.mobile} {
        max-width: 576px;
        height: 1085px;
    }
`;

const MissionCard = styled.div`
    position: absolute;
    top: 132px;
    right: 52px;
    background-color: #FDFDFD;
    padding: 33px 0px 60px 33px;
    
    ${media.mobile} {
        position: initial;
        top: 0px;
        left: 0px;
        padding: 37px 0px 25px 29px;
        order: 2;
    }
`;

const VisionCard = styled.div`
    position: absolute;
    top: 313px;
    left: 370px;
    background-color: #FDFDFD;
    padding: 33px 0px 60px 33px;

    ${media.mobile} {
        margin-top: 31px;
        position: initial;
        top: 0px;
        left: 0px;
        order: 1;
    }
`;

const ValueCard = styled.div`
    position: absolute;
    bottom: 146px;
    right: 67px;
    background-color: #FDFDFD;
    padding: 48px 0px 60px 33px;

    ${media.mobile} {
        margin-top: 31px;
        position: initial;
        bottom: 0px;
        right: 0px;
        order: 3;
    }
`;

const MissionCardImageContainer = styled.div`
    padding: 0px 103px 0px 0px;

    ${media.mobile} {
        padding: 0px 162px 0px 0px;
    }
`;
const VisionCardImageContainer = styled.div`
    padding: 0px 137px 0px 0px;

    ${media.mobile} {
        padding: 0px 180px 0px 0px;
    }
`;
const ValueCardImageContainer = styled.div`
    padding: 0px 136px 0px 0px;

    ${media.mobile} {
        padding: 0px 192px 0px 0px;
    }
`;

const MissionCardImage = styled(Image)`
    width: 139px;
    height: 91px;

    ${media.mobile} {
        width: 84px;
        height: 56px;
    }
`;

const VisionCardImage = styled(Image)`
    width: 104px;
    height: 98px;

    ${media.mobile} {
        width: 65px;
        height: 61px;
    }
`;

const ValueCardImage = styled(Image)`
    width: 91px;
    height: 89px;

    ${media.mobile} {
        width: 53px;
        height: 52px;
    }
`;

const CardContentContainer = styled.div`
    margin-top: 61px;

    ${media.mobile} {
        margin-top: 23px;
    }
`;

const CardContentTitle = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: ${color.N60}

    ${media.mobile} {
        font-size: 20px;
    }
`;

const CardContentDescription = styled.p`
    margin-top: 20px;
    max-width: 211px;
    font-size: 16;
    font-weight: 300;
    color: ${color.N60};

    ${media.mobile} {
        margin-top: 14px;
        max-width: 204px;
        font-size: 14px;

    }

`;

const HistorySection = styled.section`
    background-color: ${color.N0};
    padding-top: 106px;
    padding-bottom: 40px;

    ${media.mobile} {
        padding-top: 71px;
        padding-bottom: 48px;
    }
`;

const HistoryContainer = styled.div`
    max-width: 1100px;
    margin: auto;
`;

const HistoryInnerContainer = styled.div`
    margin-left: 92px;
    flex: 1;
    position: relative;
    z-index: 0;
`;

const HistoryText = styled.span`
    font-size: 50px;
    position: relative;
    font-weight: 500;

    ${media.mobile} {
        font-size: 32px;
    }
`;

const HistoryContentContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: ${(props: { index: number }) => props.index === 0 ? 0 : 103};
border-top: 1px solid black;
padding: 30px 0px 30px 0px;
`;

const HisotryContentTitleContainer = styled.div`
padding-left: 91px;

`;


const HisotryContentTitle = styled.span`
    font-size: 35px;
    font-weight: 700;
`;

const HisotryContentDescriptionContainer = styled.div`
    margin-left: 182px;
    flex: 1;

`;

const HisotryContentDescription = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: ${color.N50};
`;



const Home = ({ data }: IProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <Header />
            <Container>
                <TopSection>
                    <TopSectionContainer >
                        <HRContainer style={{ zIndex: 1 }}>
                            <HR left={'0%'} borderColor={'#F0F0F0'} />
                            <HR left={'33.6%'} borderColor={'#F0F0F0'} />
                            <HR left={'70.2%'} borderColor={'#F0F0F0'} />
                            <HR left={'100%'} borderColor={'#F0F0F0'} />
                        </HRContainer>
                        <TopSectionContentContainer>
                            <div>
                                <TopSectionContentTitle>문화를 통해 공간을</TopSectionContentTitle>
                                <TopSectionContentTitle>재생하다.</TopSectionContentTitle>
                            </div>
                            <TopSectionContentDescriptionContainer style={{ marginTop: 28 }}>
                                <TopSectionContentDescription >지역 역사와 문화의 고유한 가치를 콘텐츠로 개발하여</TopSectionContentDescription>
                                <TopSectionContentDescription >지역사회의 가치를 상승시키고 시민들의 삶의 질을 높이고자 합니다.</TopSectionContentDescription>

                            </TopSectionContentDescriptionContainer>
                        </TopSectionContentContainer>

                        <MainImageContainer style={{ marginTop: 66, zIndex: 2, position: 'relative', }}>
                            <MainImage src={require('../../assets/images/main.png')} alt={'main'} />
                        </MainImageContainer>
                        <MainTextContainer>
                            <MainTextImage className="img" src={require('../../assets/images/main_text.png')} alt={'main_text'} />
                        </MainTextContainer>

                        <MainBannerContainer style={{ position: 'absolute', top: 0, right: 0 }}>
                            <MainBanner style={{ padding: '36px 13px 121px 14px', backgroundColor: color.brand }}>
                                <MainBannerText style={{ textOrientation: 'sideways', writingMode: 'vertical-lr', letterSpacing: 15 }}>NABILERA</MainBannerText>
                            </MainBanner>
                        </MainBannerContainer>
                    </TopSectionContainer>

                </TopSection>
                <NewsSection>
                    <NewsSectionContainer>
                        <div style={{ zIndex: 1 }}>
                            <HR left={'0%'} borderColor={'#F0F0F0'} />
                            <HR left={'33.6%'} borderColor={'#F0F0F0'} />
                            <HR left={'70.2%'} borderColor={'#F0F0F0'} />
                            <HR left={'100%'} borderColor={'#F0F0F0'} />
                        </div>
                        <NewsImageContainer>
                            <NewsImage src={require('../../assets/images/main_news.png')} alt={'main'} />
                        </NewsImageContainer>
                        <NewsContentContainer>
                            <TextBadge />
                            <NewsText>News</NewsText>
                            <NewsContentUl>
                                {
                                    data?.news.map((item, index) => (
                                        <NewsContentLi key={index} index={index}>

                                            <NewsContentTitle>{item.title}</NewsContentTitle>
                                            <NewsContentDate>{moment(item.created_at).format('YYYY.MM.DD')}</NewsContentDate>
                                        </NewsContentLi>
                                    ))
                                }

                            </NewsContentUl>
                        </NewsContentContainer>
                    </NewsSectionContainer>

                </NewsSection>
                <VisionSection>
                    <VisionContainer style={{}}>
                        <div style={{ zIndex: 1 }}>
                            <HR left={'0%'} borderColor={'#625E5C'} />
                            <HR left={'33.6%'} borderColor={'#625E5C'} />
                            <HR left={'70.2%'} borderColor={'#625E5C'} />
                            <HR left={'100%'} borderColor={'#625E5C'} />
                        </div>
                        <MissionCard>
                            <MissionCardImageContainer>
                                <MissionCardImage src={require('../../assets/images/mission.png')} alt={'main'} />
                            </MissionCardImageContainer>
                            <CardContentContainer>
                                <CardContentTitle>미션</CardContentTitle>
                                <CardContentDescription>
                                    지역의 문화자원을 창의적 사고와 끝없는 도전을 통해 콘텐츠를 개발함으로써 지역의 문화를 바꾼다.
                                </CardContentDescription>
                            </CardContentContainer>
                        </MissionCard>


                        <VisionCard>
                            <VisionCardImageContainer>
                                <VisionCardImage src={require('../../assets/images/vision.png')} alt={'main'} />
                            </VisionCardImageContainer>
                            <CardContentContainer>
                                <CardContentTitle>비전</CardContentTitle>
                                <CardContentDescription>
                                    지역 역사와 문화를 통해 공간을 재생하여 국내 및 해외 관광객들에게 지역 문화 콘텐츠 제공
                                </CardContentDescription>
                            </CardContentContainer>
                        </VisionCard>



                        <ValueCard>
                            <ValueCardImageContainer>
                                <ValueCardImage src={require('../../assets/images/value.png')} alt={'main'} />
                            </ValueCardImageContainer>
                            <CardContentContainer>
                                <CardContentTitle>가치</CardContentTitle>
                                <CardContentDescription>
                                    #지역 #문화 #재생
                                </CardContentDescription>
                            </CardContentContainer>
                        </ValueCard>
                    </VisionContainer>
                </VisionSection>
                {/* <HistorySection>
                    <HistoryContainer>
                        <HistoryInnerContainer>
                            <TextBadge />
                            <HistoryText>History</HistoryText>
                            {data?.histories.map((hi, key) =>
                                <HistoryContentContainer key={key} index={key}>
                                    <HisotryContentTitleContainer>
                                        <HisotryContentTitle>{hi.title}</HisotryContentTitle>
                                    </HisotryContentTitleContainer>
                                    <HisotryContentDescriptionContainer>
                                        <ul>
                                            {
                                                hi.histories.map((item, index) => (
                                                    <li key={index} style={{ marginTop: index === 0 ? 0 : 15, listStyle: 'initial', listStyleType: 'disc' }}>
                                                        <HisotryContentDescription>{item.content}</HisotryContentDescription>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </HisotryContentDescriptionContainer>
                                </HistoryContentContainer>
                            )}
                        </HistoryInnerContainer>
                    </HistoryContainer>
                </HistorySection>
                <MainSectionBottom>
                    <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 1100, margin: 'auto', padding: '76px 0px 68px 0px' }}>
                        <div>
                            <span style={{ fontSize: 45, fontWeight: 700, color: color.N60 }}>Contact us !</span>
                        </div>
                        <div style={{ marginLeft: 92, paddingTop: 114, display: 'flex', flexDirection: 'row', }}>
                            <div>
                                <span style={{ fontSize: 18, fontWeight: 600, color: color.N60 }}>Address</span>
                                <div style={{ marginTop: 14 }}>
                                    <span style={{ fontSize: 13, fontWeight: 400, color: color.N60 }}>Hongseong. Korea</span>
                                </div>
                            </div>
                            <div style={{ marginLeft: 56 }}>
                                <span style={{ fontSize: 18, fontWeight: 600, color: color.N60 }}>Email</span>
                                <div style={{ marginTop: 14 }}>
                                    <span style={{ fontSize: 13, fontWeight: 400, color: color.N60 }}>nabilera2020@naver.com</span>
                                </div>
                            </div>
                            <div style={{ marginLeft: 56 }}>
                                <span style={{ fontSize: 18, fontWeight: 600, color: color.N60 }}>Tel</span>
                                <div style={{ marginTop: 14 }}>
                                    <span style={{ fontSize: 13, fontWeight: 400, color: color.N60 }}>041-406-8998</span>
                                </div>
                            </div>
                            <div style={{ marginLeft: 56 }}>
                                <span style={{ fontSize: 18, fontWeight: 600, color: color.N60 }}>SNS</span>
                                <div style={{ marginTop: 14 }}>
                                    <span style={{ fontSize: 13, fontWeight: 400, color: color.N60 }}>Instagram</span>
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <span style={{ fontSize: 13, fontWeight: 400, color: color.N60 }}>Facebook</span>
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <span style={{ fontSize: 13, fontWeight: 400, color: color.N60 }}>Blog</span>
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <span style={{ fontSize: 13, fontWeight: 400, color: color.N60 }}>Youtube</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </MainSectionBottom> */}
            </Container>
            <Footer />
        </div >
    );
};

export default Home;
