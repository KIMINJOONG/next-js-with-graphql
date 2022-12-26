
import { color } from "styles/theme";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import moment from 'moment'
import { CardContentContainer, CardContentDescription, CardContentTitle, Container, HisotryBadgeTextContainer, HisotryContentDescription, HisotryContentDescriptionContainer, HisotryContentTitle, HisotryContentTitleContainer, HistoryContainer, HistoryContentContainer, HistoryInnerContainer, HistorySection, HistoryText, HR, HRContainer, MainBanner, MainBannerContainer, MainBannerText, MainBottomContainer, MainBottomContentContainer, MainBottomDescriptionContainer, MainBottomDescriptionContent, MainBottomDescriptionContentContainer, MainBottomDescriptionTitle, MainBottomTitle, MainImage, MainImageContainer, MainSectionBottom, MainTextContainer, MainTextImage, MissionCard, MissionCardContainer, MissionCardImage, MissionCardImageContainer, NewsBadgeTextContainer, NewsContentContainer, NewsContentDate, NewsContentLi, NewsContentTitle, NewsContentUl, NewsImage, NewsImageContainer, NewsSection, NewsSectionContainer, NewsText, TextBadge, TopSection, TopSectionContainer, TopSectionContentContainer, TopSectionContentDescription, TopSectionContentDescriptionContainer, TopSectionContentTitle, ValueCard, ValueCardImage, ValueCardImageContainer, VisionCard, VisionCardImage, VisionCardImageContainer, VisionContainer, VisionSection } from "./styles";
import { useCallback } from "react";


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





const Home = ({ data }: IProps) => {
    const onClickSocial = useCallback((url: string) => {
        window.open(url);
    }, []);
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
                            <TopSectionContentDescriptionContainer>
                                <TopSectionContentDescription >지역 역사와 문화의 고유한 가치를 콘텐츠로 개발하여</TopSectionContentDescription>
                                <TopSectionContentDescription >지역사회의 가치를 상승시키고 시민들의 삶의 질을 높이고자 합니다.</TopSectionContentDescription>

                            </TopSectionContentDescriptionContainer>
                        </TopSectionContentContainer>

                        <MainImageContainer>
                            <MainImage src={require('../../assets/images/main.png')} alt={'main'} />
                        </MainImageContainer>
                        <MainTextContainer>
                            <MainTextImage className="img" src={require('../../assets/images/main_text.png')} alt={'main_text'} />
                        </MainTextContainer>

                        <MainBannerContainer>
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
                            <NewsBadgeTextContainer>
                                <TextBadge />
                                <NewsText>News</NewsText>
                            </NewsBadgeTextContainer>

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
                    <VisionContainer>
                        <div style={{ zIndex: 1 }}>
                            <HR left={'0%'} borderColor={'#625E5C'} />
                            <HR left={'33.6%'} borderColor={'#625E5C'} />
                            <HR left={'70.2%'} borderColor={'#625E5C'} />
                            <HR left={'100%'} borderColor={'#625E5C'} />
                        </div>
                        <MissionCardContainer justifyContent="flex-start">
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
                        </MissionCardContainer>




                        <MissionCardContainer justifyContent="flex-end">
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
                        </MissionCardContainer>



                        <MissionCardContainer justifyContent="flex-start">
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
                        </MissionCardContainer>
                    </VisionContainer>
                </VisionSection>
                <HistorySection>
                    <HistoryContainer>
                        <HistoryInnerContainer>
                            <HisotryBadgeTextContainer>
                                <TextBadge />
                                <HistoryText>History</HistoryText>
                            </HisotryBadgeTextContainer>

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
                    <MainBottomContainer>
                        <div className="contact-us">
                            <MainBottomTitle>Contact us !</MainBottomTitle>
                        </div>
                        <MainBottomContentContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>Address</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>Hongseong. Korea</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>Email</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent>nabilera2020@naver.com</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>Tel</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => window.open('tel:0414068998')}>041-406-8998</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                            <MainBottomDescriptionContainer>
                                <MainBottomDescriptionTitle>SNS</MainBottomDescriptionTitle>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://instagram.com/nabilera.official?igshid=YmMyMTA2M2Y=')}>Instagram</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://www.facebook.com/nabilera.official?mibextid=ZbWKwL')}>Facebook</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://m.blog.naver.com/PostList.naver?blogId=nabilera2020')}>Blog</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                                <MainBottomDescriptionContentContainer>
                                    <MainBottomDescriptionContent style={{cursor: 'pointer'}} onClick={() => onClickSocial('https://youtube.com/channel/UC69_LSbhYcZFuaprQuXkFnA')}>Youtube</MainBottomDescriptionContent>
                                </MainBottomDescriptionContentContainer>
                            </MainBottomDescriptionContainer>
                        </MainBottomContentContainer>
                    </MainBottomContainer>

                </MainSectionBottom>
            </Container>
            <Footer />
        </div >
    );
};

export default Home;
