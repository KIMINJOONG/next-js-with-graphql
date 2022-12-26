import styled from "styled-components";
import { color, media, size } from "styles/theme";

export const NewsContainer = styled.div`
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
        display: flex;
        flex-direction: column;
        .search-area {
            display: flex;
            justify-content: end;
            margin-bottom: 16px;
        }
        .list-area {
            border-top: 1px solid ${color.N55};
            .table-head {
                .table-head-cell {
                    border-bottom: 0px;
                    line-height: 30px;
                    color: ${color.N55};
                    font-size: 14px;
                    font-weight: 400;
                    padding-top: 30px;
                    padding-bottom: 0px;
                    line-height: 17px;
                    text-align: center;
                }
                .left {
                    text-align: left;
                }
            }
            .table-body {
                .table-body-cell {
                    cursor: pointer;
                    line-height: 26px;
                    font-size: 15px;
                    font-weight: 400;
                    color: ${color.N55};
                    text-align: center;
                    border-bottom: 1px solid ${color.N15};
                }
                .left {
                    text-align: left;
                }
                .index {
                    font-weight: 600;
                }
                .light {
                    color: ${color.N15};
                }
            }
            
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
            .search-area {
                margin-left: 37px;
                margin-right: 37px;
                margin-bottom: 37px;
            }

            .list-area {
                margin-left: 15px;
                margin-right: 15px;
                .list-mobile {
                    padding-top: 20px;
                    padding-bottom: 20px;
                    .mobile-create {
                        margin-top: 10px;
                        color: ${color.N25};
                        font-family: Pretendard;
                        font-size: 13px;
                        font-weight: 300;
                    }
                    border-bottom: 1px solid ${color.N20};
                }
            }

            .list-page {
                margin-top: 50px;
                margin-bottom: 80px;
            }
        }
    }
`