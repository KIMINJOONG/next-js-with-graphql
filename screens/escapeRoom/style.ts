import styled from 'styled-components';
import {color, media, size} from 'styles/theme';

export const EscapeRoomBodyTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 979px;
  background-image: url(images/escape_room_bg.png);
  background-repeat: no-repeat;
  background-size: 100% 987px;

  ${media.mobile} {
    height: 567px;
    background-size: 100% 572px;
  }

  .title {
    color: #ffd557;
    font-size: 13px;
  }

  .titleImageWrap {
    margin-top: 20px;
  }
`;

export const EscapeRoomBodySecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 420px;
  background-image: url(images/escape_room_bg2.png);
  background-repeat: no-repeat;
  background-size: 100% 420px;
  padding: 0px 32px;

  ${media.mobile} {
    height: 356px;
    background-size: 100% 356px;
  }

  .topWrap {
    display: flex;
    align-items: center;
  }

  .title {
    color: #f6c42d;
    font-size: 30px;
    font-weight: 700;
    margin: 0px 10px;
  }

  .content {
    color: ${color.N20};
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    margin-top: 34px;
  }
`;

export const EscapeRoomBodyThirdThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 797px;
  background-image: url(images/escape_room_bg3.png);
  background-repeat: no-repeat;
  background-size: 100% 797px;
  padding: 60px 0px;

  ${media.mobile} {
    height: 538px;
    background-size: 100% 538px;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 30px;
    color: ${color.brand};
    font-weight: 700;
  }

  .contentWrap {
    display: flex;
    align-items: center;
    margin-top: 34px;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .contentTitleWrap {
    margin-left: 32px;
  }

  .contentItemWrap {
    width: 152px;
    height: 190px;
    border: 1px solid black;
  }

  .contentItemTitle {
    margin-top: 16px;
    color: ${color.N0};
    font-size: 14px;
    font-weight: 400;
  }
`;

export const EscapeRoomBodyFourthContainer = styled.div`
  padding: 75px 32px 70px 32px;
  background-color: ${color.N55};

  .title {
    margin-top: 37px;
    color: ${color.N20};
    text-align: center;
    font-size: 14px;
    font-weight: 300;
  }

  .contentWrap {
    display: flex;
    margin-top: 38px;
    padding: 22px 46px 22px 39px;
    background-color: ${color.N0};

    ${media.mobile} {
      flex-direction: column;
      padding: 42px 22px 35px 22px;
    }
  }

  .contentImageWrap {
    width: 248px;
    height: 390px;

    ${media.mobile} {
      height: 350px;
    }
  }

  .contentItemWrap {
    padding-left: 32px;
    ${media.mobile} {
      padding-left: 0px;
      margin-top: 40px;
    }
  }

  .genre {
    color: #ff7a00;
    font-size: 14px;
    font-weight: 500;
  }

  .contentTitle {
    margin-top: 6px;
  }

  .contentDifficultyPersonWrap {
    padding-left: 32px;
    margin-top: 33px;
    flex: 1;

    ${media.mobile} {
      padding-left: 0px;
    }
  }

  .contentDifficultyWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .contentDifficulty {
    width: 50px;
    font-size: 14px;
    color: ${color.N55};
    font-weight: 500;
  }

  .contentDifficultyVerticalImageWrap {
    margin-left: 11px;
  }

  .contentPersonCountWrap {
    display: flex;

    margin-left: 13px;
    flex-wrap: wrap;
  }
  .contentPersonCount {
    flex-wrap: wrap;
    font-size: 14px;
    color: ${color.N55};
    font-weight: 500;
  }

  .contentExtraWrap {
    margin-top: 21px;
    padding-left: 32px;

    ${media.mobile} {
      padding-left: 0px;
    }
  }

  .contentExtraItem {
    width: 148px;
    height: 111px;
    border: 1px solid black;
  }
`;
