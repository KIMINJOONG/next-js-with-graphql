import styled from "styled-components";
import { color } from "styles/theme";

export const BurgerContainer = styled.div`
    margin-left: auto;
    margin-right: 24px;
    div {
        width: 18px;
        height: 18px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
        span {
            display: block;
            position: absolute;
            height: 2.5px;
            width: 100%;
            background: ${color.N50};
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
        }
        span:nth-child(1) {
            top: 0px;
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
        }
        span:nth-child(2) {
            top: 8px;
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
        }
        span:nth-child(3) {
            top: 16px;
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
        }
    }
    div.open {
        span:nth-child(1) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            top: 0px;
            width: 26px;
        }
        span:nth-child(2) {
            width: 0%;
            opacity: 0;
        }
        span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            top: 18px;
            width: 26px;
        }
    }

`


const HamburgerComponent = ({open, onClick, ...other}: any) => {
    return <BurgerContainer onClick={onClick}>
        <div className={open ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </BurgerContainer>
}

export default HamburgerComponent