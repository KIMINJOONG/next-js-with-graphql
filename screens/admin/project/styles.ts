import styled from "styled-components";
import { color, media, size } from "styles/theme";

export const ProjectsContainer = styled.div`
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
        .main-image {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 20px;
            img {
                height: 389px;
                width: 277px;
                object-fit: cover;
            }
            .main-image-skeleton {
                border: 5px dashed ${color.N25};
                height: 389px;
                width: 277px;
                border-radius: 10px;
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
        .n-field {
            .main-image {
                img {
                    height: 389px;
                    width: 277px;
                }
                .main-image-skeleton {
                    height: 389px;
                    width: 277px;
                }
            }
        }
    }
`
