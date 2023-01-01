import styled from "styled-components";
import { color, media, size } from "styles/theme";

export const NewsContainer = styled.div`
    max-width: ${size.container}px;
    margin: auto;
    padding-top: 60px;
    h1 {
        font-size: 4rem;
    }
    .n-title {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .n-field {
        display: flex;
        flex-direction: column;
        .title {
            margin-bottom: 20px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            .category {
                width: 180px;
                margin-right: 20px;
            }
        }
        .image-button {
            span {
                display: inline-block;
                padding: 8px 22px;
                background: ${color.brand};
                border-radius: 4px;
                color: white;
                cursor: pointer;
            }
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .image-skeleton {
            position: relative;
            border: 5px dashed ${color.N25};
            height: 409px;
            width: 297px;
            border-radius: 10px;
        }
    }
    .n-btn {
        float: right;
        margin-top: 20px;
        width: 100px;
    }
    ${media.tablet} {
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 80px;
        .n-table {
            
        }
    }
`
