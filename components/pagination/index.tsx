import styled from "styled-components";
import { color } from "styles/theme";

export const NPaginationContainer = styled.div`
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
`