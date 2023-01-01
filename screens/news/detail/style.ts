import styled from "styled-components";
import { color, media, size } from "styles/theme";

export const DetailContainer = styled.div`
    max-width: ${size.container}px;
    margin: auto;
    padding-top: 60px;
    h1 {
        margin-top: 80px;
        margin-bottom: 80px;
        display: flex;
        justify-content: center;
        > span {
            position: relative;
            .circle-cut {
                position: absolute;
                width:122px;
                height:61px;
                border-radius: 0 0 61px 61px;
                background: ${color.brand};
                top: -22px;
                right: 87px;
                z-index: -1;
            }
        }
    }
    .content-area {
        margin-top: 121px;
        display: flex;
        flex-direction: column;
        border-top: 1px solid ${color.N55};
        border-bottom: 1px solid ${color.N20};
        .content-title {
            text-align: center;
            border-bottom: 1px solid ${color.N20};
            h2 {
                margin-top: 40px;
                margin-bottom: 21px;
                font-size: 20px;
                font-weight: 500;
            }
            p {
                font-family: Pretendard;
                font-size: 15px;
                font-weight: 400;
                margin-bottom: 40px;
            }
        }
        .content-item {
            max-width: 734px;
            font-size: 16px;
            font-weight: 300;
            display: flex;
            justify-content: center;
            margin: auto;
            line-height: 187%;
            .content-margin {
                margin-top: 46px;
                margin-bottom: 33px;
                a {
                    color: ${color.second};
                    text-decoration: underline;
                }
            }
            white-space: pre-wrap;
        }
    }
    .button-area {
        margin-top: 87px;
        margin-bottom: 87px;
        display: flex;
        justify-content: center;
        .button {
            width: 265px;
            height: 71px;
            font-size: 17px;
            font-weight: 500;
            color: ${color.N60};
            border-radius: 0;
            border: 1px solid ${color.N60}
        }
    }
    ${media.mobile} {
        padding-top: 23px;
        h1 {
            font-size: 32px;
            > span {
                .circle-cut {
                    width: 82px;
                    height: 41px;
                    right: 71px;
                    top: -12px;
                }
            }
        }
        .content-area {
            margin-top: 80px;
            margin-left: 15px;
            margin-right: 15px;
            .content-title {
                h2 {
                    margin-top: 37px;
                    margin-bottom: 28px;
                }
                p {
                    margin-bottom: 37px;
                }
            }
            .content-item {
                .content-margin {
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
            }
        }
        .button-area {
            margin-top: 48px;
            margin-bottom: 68px;
        }
    }
`