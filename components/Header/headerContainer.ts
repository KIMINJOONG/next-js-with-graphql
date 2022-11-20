import styled from "styled-components";
import { color } from "styles/theme";

export const HeaderContainer = styled.nav`
    position: fixed;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: 1px solid ${color.N20};
    .header-inner {
        max-width: 1100px;
        margin: auto;
        height: 100%;
        .header-sub {
            display: flex;
            height: 100%;
            align-items: center;
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
                        color: ${color.N40};
                    }
                }
                .menu-item:last-child {
                    margin-right: 0;
                }
                .hover-active {
                    position: relative;
                    &:hover {
                        .dropdown-content {
                            display : block;
                        }
                    }
                    .dropdown-content {
                        display: none;
                        > ul {
                            position: absolute;
                            top: 60px;
                            left: 0;
                            min-width: 300px;
                            display: flex;
                            height: 60px;
                            align-items: center;
                            > li {
                                height:100%;
                                padding-right: 40px;
                                color: ${color.N30};
                                display: flex;
                                align-items: center;
                            }
                        }
                        .dropdown-background {
                            position: fixed;
                            top: 60px;
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

`