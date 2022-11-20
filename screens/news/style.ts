import styled from "styled-components";
import { color, size } from "styles/theme";

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
    .page-area {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 54px;
        .MuiPaginationItem-root {
            border: 0px;
            width: 36px;
            height: 36px;
            color: ${color.N55};
            font-size: 17px;
            font-weight: 600;
            border-radius: 100%;
            margin: 0 15px;
            padding: 0;
            display: flex;
            align-items: center;
            .Mui-disabled {
                opacity: 0;
                color: ${color.N0};
            }
            
        }
        .Mui-selected {
                color: ${color.N0};
                background-color: ${color.brand};
            }
    }
`