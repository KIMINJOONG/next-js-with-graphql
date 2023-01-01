import styled from "styled-components";
import { color, media } from "styles/theme";

interface IImgSize {
    width?: number
    mwidth?: number
    height?: number
    mheight?: number
}

export const StyledImg = styled.img`
    min-width: ${props => props.width ? `${props.width}px` : '153px'};
    height: ${props => props.height ? `${props.height}px` : '114px'};
    object-fit: cover;
    ${media.tablet} {
        min-width: ${(props: IImgSize) => props.mwidth ? `${props.mwidth}px` : '171px'};
        height: ${(props: IImgSize) => props.mheight ? `${props.mheight}px` : '128px'};
    }
`

export const StyledItem = styled.div`
    position: relative;
    margin-right: 10px;
    border: 5px dashed ${color.N25};
    width: ${(props: IImgSize) => props.width ? `${props.width + 10}px` : '163px'};
    height: ${(props: IImgSize) => props.height ? `${props.height + 10}px` : '124px'};
    border-radius: 10px;
    ${media.tablet} {
        width: ${(props: IImgSize) => props.mwidth ? `${props.mwidth + 10}px` : '181px'};
        height: ${(props: IImgSize) => props.mheight ? `${props.mheight + 10}px` : '138px'};
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