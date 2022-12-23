import styled from "styled-components";
import { color, size } from "styles/theme";

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
`