import styled from 'styled-components';
import {media} from 'styles/theme';

export const RealSoundContainer = styled.div`
  display: 'flex';
  flex: 1;
  padding-top: 60px;
`;

export const RealSoundBodyFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1080px;
  background-image: url(images/real_sound_bg_01.png);
  background-repeat: no-repeat;
  background-size: 100% 1080px;
  padding-top: 37px;
  padding-bottom: 40px;

  ${media.mobile} {
    height: 572px;
    background-size: 100% 572px;
  }

  .title {
    color: #fff;
    font-size: 32px;
    text-align: center;
    font-weight: 600;
  }
`;

export const RealSoundBodySecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 561px;
  background-image: url(images/real_sound_bg_02.png);
  background-repeat: no-repeat;
  background-size: 100% 578px;
  padding-top: 37px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
  padding-right: 28px;
  padding-left: 28px;

  ${media.mobile} {
    height: 494px;
    background-size: 100% 494px;
  }

  .title {
    color: #f6c42d;
    font-size: 30px;
    font-weight: 700;
    margin: 0px 10px;
  }
`;

export const RealSoundBodyThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1029px;
  padding: 60px 32px;
  background-image: url(images/real_sound_bg_03.png);
  background-repeat: no-repeat;
  background-size: 100% 1029px;
  align-items: center;

  ${media.mobile} {
    height: 1134px;
    background-size: 100% 1134px;
  }

  .title {
    color: #f6c42d;
    font-size: 30px;
    font-weight: 700;
    margin: 0px 10px;
  }
`;

export const RealSoundBodyForthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1044px;
  padding: 50px 32px;
  background-image: url(images/real_sound_bg_04.png);
  background-repeat: no-repeat;
  background-size: 100% 1044px;
  align-items: center;

  ${media.mobile} {
    height: 497px;
    background-size: 100% 497px;
  }

  .title {
    color: #f6c42d;
    font-size: 30px;
    font-weight: 700;
    margin-top: 16px;
  }
`;
