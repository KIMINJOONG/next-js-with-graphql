import styled from "styled-components";
import { color, size } from "styles/theme";

export const ProjectContainer = styled.div`
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
                width:61px;
                height:61px;
                border-top-right-radius:100%;
                background: ${color.brand};
                top: -22px;
                right: -36px;
                z-index: -1;
            }
        }
    }
    .tab-nav{
        line-height: 40px;
        border-bottom:1px solid ${color.N60};
        text-align: center;
        margin-bottom: 37px;
        li {
            border-left:1px solid ${color.N20};
            border-top:1px solid ${color.N20};
            display: inline-block;
            height:40px;
            text-align:center;
            a {
                position:relative;
                display:block;
                background: ${color.N0};
                color: ${color.N25};
                line-height:40px;
                font-size:16px;
                cursor: pointer;
                width: 184px;
            }
            a:hover {
                color: ${color.N55};
            }
            a.active {
                color: ${color.N55};
            }
            a.active:before {
                content:"";
                position:absolute;
                left:-1px;
                top:-1px;
                width:100%;
                height:40px;
                z-index: 1;
                border-right: 1px solid ${color.N60};
                border-left: 1px solid ${color.N60};
                border-top: 1px solid ${color.N60};
                border-bottom:1px solid ${color.N0};
            }
        }
        
        li:last-child {
            border-right:1px solid ${color.N20};
        }
    }
    .tab-content {
        margin-bottom: 61px;
        .tab-content-item {
            display: flex;
            border: 1px solid ${color.N20};
            padding: 22px 34px 22px 90px;
            margin-bottom: 30px;
            > img {
                height: 389px;
                width: 277px;
            }
            .poster-content {
                padding-top: 23px;
                padding-left: 33px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .poster-title {
                    p {
                        font-weight: 500;
                        font-size: 14px;
                        color: ${color.second};
                    }
                    h2 {
                        margin-top: 6px;
                        margin-bottom: 33px;
                    }
                    .poster-category {
                        li {
                            margin-bottom: 10px;
                            .sub-title {
                                font-weight: 500;
                                font-size: 14px;
                                color: ${color.N55};
                            }
                            .sub-content {
                                font-weight: 300;
                                font-size: 14px;
                                color: ${color.N55};
                            }
                            .divider {
                                border-left : 1px solid ${color.N15};
                                height : 10px;
                                display: inline-block;
                                margin: 0 11px;
                            }
                        }
                        li:last-child {
                            margin-bottom: 0px;
                        }
                    }
                }
                .content-images {
                    display: flex;
                    img {
                        width: 154px;
                        height: 114px;
                        margin-right: 18px;
                    }
                    img:last-child {
                        margin-right: 0px;
                    }
                }
            }
        }
        .tab-content-item:last-child {
            margin-bottom: 0px;
        }
    }

`