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
            ul {
                display: flex;
                flex: 1;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                color: ${color.N40};
            }
        }
    }

`