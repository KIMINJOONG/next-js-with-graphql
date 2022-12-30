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
            flex-direction: column;
            margin-top: 20px;
            margin-bottom: 20px;
            img {
                height: 389px;
                width: 277px;
                object-fit: cover;
            }
            .main-image-skeleton {
                position: relative;
                border: 5px dashed ${color.N25};
                height: 399px;
                width: 287px;
                border-radius: 10px;
                .remove {
                    z-index: 100;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    color: ${color.N25};
                    cursor: pointer;
                }
            }
        }
        .sub-image {
            display: flex;
            flex-direction: column;
            .sub-image-row {
                display: flex;
                overflow-x: scroll;
                .sub-image-item {
                    position: relative;
                    margin-right: 10px;
                    border: 5px dashed ${color.N25};
                    width: 163px;
                    height: 124px;
                    border-radius: 10px;
                    img {
                        min-width: 153px;
                        height: 114px;
                        object-fit: cover;
                    }
                }
                .sub-image-item:last-child {
                    margin-right: 0px;
                }
                
                .sub-image-skeleton {
                    border: 5px dashed ${color.N25};
                    width: 163px;
                    height: 124px;
                    border-radius: 10px;
                }

                .remove {
                    z-index: 100;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    color: ${color.N25};
                    cursor: pointer;
                }
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
            margin-bottom: 20px;
        }
    }
    .n-btn {
        float: right;
        margin-top: 20px;
        width: 100px;
        margin-bottom: 40px;
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
                    height: 399px;
                    width: 287px;
                }
            }
            .sub-image {
                .sub-image-row {
                    .sub-image-item {
                        width: 181px;
                        height: 138px;
                        img {
                            min-width: 171px;
                            height: 128px;
                        }
                    }
                    .sub-image-skeleton {
                        width: 181px;
                        height: 138px;
                    }
                }
            }
        }
    }
`
