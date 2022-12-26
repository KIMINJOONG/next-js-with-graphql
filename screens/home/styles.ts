import styled from "styled-components";
import { color, media } from "styles/theme";
import Image from "next/image";

export const MainSectionBottom = styled.section`
  height: 394px;
  background-image: url('images/main_bottom_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 67%;
  display: flex;
  align-items: center;

  ${media.mobile} {
    height: 494px;
    background-position: 60%;
    background-image: url('images/main_bottom_background_mobile.png');
  }
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
padding-top:60px;
background-color: white;
`;

export const TopSection = styled.section`
background-color: #F8F8F8;
height: 699px;
`;

export const TopSectionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    position: relative;

    ${media.mobile} {
        max-width: 576px;
        overflow: hidden;
    }
`;

export const HRContainer = styled.div`
    z-index: 1;

    ${media.mobile} {
        padding-left: 28px;
    }
`;

export const HR = styled.hr`
    left: ${(props: { left: string, borderColor: string }) => props.left};
    height: calc(100% - 4px);
    border: 0.5px solid ${(props) => props.borderColor};
    position: absolute;

    ${media.mobile} {
        display: none;
    }
`;

export const TopSectionContentContainer = styled.div`
    padding-top: 160px;
    z-index: 2;
    position: relative;
    

    ${media.mobile} {
        padding-top: 48px;
        padding-left: 28px;
    }


`;

export const TopSectionContentTitle = styled.p`
    font-size: 50px;
    font-weight: 600;

    ${media.mobile} {
        font-size: 32px;
    }
`;

export const TopSectionContentDescriptionContainer = styled.div`
    margin-top: 28px;
`;

export const TopSectionContentDescription = styled.p`
    font-size: 18px;
    font-weight: 300;

    ${media.mobile} {
        font-size: 15px;
    }
`;

export const MainTextContainer = styled.div`
    position: absolute;
    top: -60px;
    right: 0px;
    margin-right: 104px;

    ${media.mobile} {
        top: -80px;
        right: -110px;
        margin-right: 0px;

    }
`;

export const MainTextImage = styled(Image)`
    width: 254px;
    height: 259px;

    ${media.mobile} {
        width: 205px;
        height: 209px;
    }
`;

export const MainImageContainer = styled.div`
    margin-top: 66px; 
    z-index: 2; 
    position: relative;

    ${media.mobile} {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const MainImage = styled(Image)`
    width: 100%;
    height: 438px;
    object-fit: cover;
    ${media.mobile} {
        height: 387px;
    }
`;

export const MainBannerContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;

    ${media.mobile} {
        display: none;
    }
`;

export const MainBanner = styled.div`
    padding: 36px 13px 121px 14px;
    background-color: ${color.brand};
`;

export const MainBannerText = styled.span`
    text-orientation: sideways;
    writing-mode: vertical-lr;
    letter-spacing: 15px;
`;

export const NewsSection = styled.section`
    height: 679px;

    ${media.mobile} {
        height: 914px;
    }
    
`;

export const NewsSectionContainer = styled.div`
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

export const NewsImageContainer = styled.div`
    margin-top: 288px;
    z-index: 2;
    position: relative;

    ${media.mobile} {
        order: 2;
        margin-top: 65px;
        display: flex;
        justify-content: center;
    }
`;

export const NewsImage = styled(Image)`
    width: 367px;
    height: 477px;

    ${media.mobile} {
        margin-top: 65px;
        width: 256px;
        height: 333px;
    }
`;

export const NewsContentContainer = styled.div`
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

export const NewsBadgeTextContainer = styled.div`
    position: relative;
    ${media.mobile} {
        padding-left: 16px;
    }

`;

export const TextBadge = styled.i`
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

export const NewsText = styled.span`
    font-size: 50px;
    z-index: 1;
    position: relative;

    ${media.mobile} {
        font-size: 32px;
    }
`;

export const NewsContentUl = styled.ul`
    margin-top: 33px;
    z-index: 2;
    position: relative;
`;

export const NewsContentLi = styled.li`
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

export const NewsContentTitle = styled.p`
    flex: 1;
    font-size: 15px;
    font-weight: 300;
    color: ${color.N50};

    ${media.mobile} {
        font-size: 14px;
        font-weight: 400;

    }
`;

export const NewsContentDate = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${color.N50};

    ${media.mobile} {
        margin-top: 8px;
        font-size: 12px;
        font-weight: 300;

    }
`;

export const VisionSection = styled.section`
    background-color: ${color.N40};
`;

export const VisionContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    position: relative;
    height: 1152px;

    ${media.mobile} {
        max-width: 576px;
        height: 1085px;
        padding-top: 150px;
    }
`;

export const MissionCardContainer = styled.div`
    ${media.mobile} {
        display: flex;
        justify-content: ${(props: { justifyContent: string }) => props.justifyContent};
    }
`;

export const MissionCard = styled.div`
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

export const VisionCard = styled.div`
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

export const ValueCard = styled.div`
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

export const MissionCardImageContainer = styled.div`
    padding: 0px 103px 0px 0px;

    ${media.mobile} {
        padding: 0px 162px 0px 0px;
    }
`;
export const VisionCardImageContainer = styled.div`
    padding: 0px 137px 0px 0px;

    ${media.mobile} {
        padding: 0px 180px 0px 0px;
    }
`;
export const ValueCardImageContainer = styled.div`
    padding: 0px 136px 0px 0px;

    ${media.mobile} {
        padding: 0px 192px 0px 0px;
    }
`;

export const MissionCardImage = styled(Image)`
    width: 139px;
    height: 91px;

    ${media.mobile} {
        width: 84px;
        height: 56px;
    }
`;

export const VisionCardImage = styled(Image)`
    width: 104px;
    height: 98px;

    ${media.mobile} {
        width: 65px;
        height: 61px;
    }
`;

export const ValueCardImage = styled(Image)`
    width: 91px;
    height: 89px;

    ${media.mobile} {
        width: 53px;
        height: 52px;
    }
`;

export const CardContentContainer = styled.div`
    margin-top: 61px;

    ${media.mobile} {
        margin-top: 23px;
    }
`;

export const CardContentTitle = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: ${color.N60}

    ${media.mobile} {
        font-size: 20px;
    }
`;

export const CardContentDescription = styled.p`
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

export const HistorySection = styled.section`
    background-color: ${color.N0};
    padding-top: 106px;
    padding-bottom: 40px;

    ${media.mobile} {
        padding-top: 71px;
        padding-bottom: 48px;
    }
`;

export const HistoryContainer = styled.div`
    max-width: 1100px;
    margin: auto;
`;

export const HistoryInnerContainer = styled.div`
    margin-left: 92px;
    flex: 1;
    position: relative;
    z-index: 0;

    ${media.mobile} {
        margin-left: 0px;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const HisotryBadgeTextContainer = styled.div`
    position: relative;
    margin-bottom: 103px;

    ${media.mobile} {
        margin-bottom: 76px;
    }

`;

export const HistoryText = styled.span`
    font-size: 50px;
    position: relative;
    font-weight: 500;

    ${media.mobile} {
        font-size: 32px;
    }
`;

export const HistoryContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${(props: { index: number }) => props.index === 0 ? 0 : 103};
    border-top: 1px solid black;
    padding: 30px 0px 30px 0px;

    ${media.mobile} {
        flex-direction: column;
    }

`;

export const HisotryContentTitleContainer = styled.div`
    padding-left: 91px;
    ${media.mobile} {
        padding-left: 29px;
    }

`;


export const HisotryContentTitle = styled.span`
    font-size: 35px;
    font-weight: 700;
`;

export const HisotryContentDescriptionContainer = styled.div`
    margin-left: 182px;
    flex: 1;

    ${media.mobile} {
        margin-left: 0px;
        padding: 17px 15px 0px 32px;
    }

`;

export const HisotryContentDescription = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: ${color.N50};
`;

export const MainBottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: auto;
    padding: 76px 0px 68px 0px;
    width: 100%;

    .contact-us {
        display: inline-block;
        flex: 1;
    }
    ${media.mobile} {
        flex-direction: column;
        padding-top: 72px;
        padding-left: 14px;
        padding-right: 14px;
    }

    
`;

export const MainBottomTitle = styled.div`
    font-size: 45px;
    font-weight: 700;
    color: ${color.N60};

    ${media.mobile} {
        font-size: 32px;
    } 

`;

export const MainBottomContentContainer = styled.div`
    padding-top: 114px;
    display: flex;
    flex-direction: row;
    flex: 2;

    ${media.mobile} {
        margin-left: 0px;
        padding-top: 0px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export const MainBottomDescriptionContainer = styled.div`
    flex: 1;
    ${media.mobile} {
        margin-top: 58px;
        display: flex; 
        flex-basis: 50%;
        justify-content: start;
        flex-direction: column;
    }
`;

export const MainBottomDescriptionTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${color.N50};


`;

export const MainBottomDescriptionContentContainer = styled.div`
    margin-top: 14px;
`;

export const MainBottomDescriptionContent = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${color.N60};
`;