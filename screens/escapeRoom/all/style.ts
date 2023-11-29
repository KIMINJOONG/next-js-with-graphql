import styled from 'styled-components';
import {media} from 'styles/theme';

export const EscapeRoomAllContainer = styled.div`
  display: 'flex';
  flex: 1;
  padding-top: 60px;
  padding-bottom: 63px;
  width: 100%;
  background-image: url(../images/escape_room_all_bg.png);
  background-repeat: no-repeat;
  background-size: 100% auto;

  .title {
    color: #fff;
    padding-top: 81px;
    font-size: 32px;
    text-align: center;
    font-weight: 600;

    ${media.mobile} {
      padding-top: 37px;
    }
  }

  .contentWrap {
    display: flex;
    flex: 1;
    flex-direction: row;
    padding-top: 81px;
    padding-bottom: 63px;
    flex-wrap: wrap;

    ${media.mobile} {
      flex-direction: column;
      padding-top: 37px;
      padding-bottom: 55px;
    }
  }

  .content {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-top: 16px;
  }
`;
