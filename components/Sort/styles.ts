import styled from "styled-components";
import { color, media } from "styles/theme";

export const StyledImg = styled.img`
    min-width: 153px;
    height: 114px;
    object-fit: cover;
    ${media.tablet} {
        min-width: 171px;
        height: 128px;
    }
`

export const StyledItem = styled.div`
    position: relative;
    margin-right: 10px;
    border: 5px dashed ${color.N25};
    width: 163px;
    height: 124px;
    border-radius: 10px;
    ${media.tablet} {
        width: 181px;
        height: 138px;
    }
`

export const StyledContainer = styled.div`
    display: flex;
    overflow-x: scroll;
`

export const StyledRemove = styled.div`
    z-index: 100;
    position: absolute;
    top: 5px;
    right: 5px;
    color: ${color.N25};
    cursor: pointer;
`