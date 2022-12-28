import styled from "styled-components";
import { media, size } from "styles/theme";

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
