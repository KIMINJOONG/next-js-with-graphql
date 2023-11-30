import styled from 'styled-components';
import {color, media} from 'styles/theme';

interface IProps {
  type: number | undefined;
}
export const HeaderContainer = styled.nav<IProps>`
  position: fixed;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  /* background: #fff; */
  background: ${props =>
    props.type && (props.type === 4 || props.type === 5) ? color.N60 : '#fff'};
  border-bottom: 1px solid ${color.N20};
  .header-inner {
    max-width: 1100px;
    margin: auto;
    height: 100%;
    .header-sub {
      display: flex;
      height: 100%;
      align-items: center;
      > a {
        ${media.mobile} {
          margin-left: 30px;
        }
      }
      .menus {
        display: flex;
        height: 100%;
        flex: 1;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        .menu-item {
          cursor: pointer;
          display: flex;
          align-items: center;
          height: 100%;
          margin-right: 36px;
          .menu-href {
            position: relative;
            color: ${props =>
              props.type && (props.type === 4 || props.type === 5)
                ? color.N0
                : color.N40};
            .munu-underline {
              z-index: -1;
              position: absolute;
              width: 0%;
              bottom: 3px;
              border-bottom: 7px solid ${color.brand};
              transition: all ease 0.2s 0s;
            }
            .munu-underline.active {
              width: 100%;
            }
          }
        }
        .menu-item:hover {
          .menu-href {
            .munu-underline {
              width: 100%;
            }
          }
        }
        .menu-item:last-child {
          margin-right: 0;
        }
        .hover-active {
          position: relative;
          &:hover {
            .dropdown-content {
              visibility: visible;
              opacity: 1;
              > ul {
                top: 60px;
              }
              .dropdown-background {
                top: 60px;
              }
            }
          }
          .dropdown-content {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.3s linear;
            > ul {
              transition: top 0.3s;
              position: absolute;
              top: 0;
              left: 0;
              min-width: 300px;
              display: flex;
              height: 60px;
              align-items: center;
              > li {
                height: 100%;
                padding-right: 40px;
                color: ${color.N30};
                display: flex;
                align-items: center;
              }
            }
            .dropdown-background {
              position: fixed;
              transition: top 0.3s;
              top: 0;
              height: 60px;
              left: 0;
              width: 100%;
              background: ${color.N0};
              border-bottom: solid 1px ${color.N50};
            }
          }
        }
      }
    }
  }
  ${media.mobile} {
    border-bottom: 0;
  }
`;
