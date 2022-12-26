import styled from "styled-components"
import { color } from "styles/theme"


const PlusMinusContainer = styled.div`
    .closed {
    .vertical {
        transition: all 0.5s ease-in-out;
        transform: rotate(-90deg);
    }
    .horizontal {
        transition: all 0.5s ease-in-out;
        transform: rotate(-90deg);
        opacity: 1;
    }
    }

    .opened {
    opacity: 1;
    .vertical {
        transition: all 0.5s ease-in-out;
        transform: rotate(90deg);
    }
    .horizontal {
        transition: all 0.5s ease-in-out;
        transform: rotate(90deg);
        opacity: 0;
    }
    }

    .circle-plus {
        font-size: 1em;
        opacity: .7;
    }

    .circle-plus .circle {
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        margin-left: 15px;
    }
    .circle-plus .circle .horizontal {
        position: absolute;
        background-color: ${color.brand};
        width: 18px;
        height: 2.5px;
        left: 50%;
        margin-left: -10px;
        top: 50%;
        border-radius: 5px;
    }
    .circle-plus .circle .vertical {
        position: absolute;
        background-color: ${color.brand};;
        width: 2.5px;
        height: 18px;
        left: 50%;
        margin-left: -2.5px;
        top: 50%;
        margin-top: -8px;
        border-radius: 5px;
    }


`
const PlusMinusComponent = ({open, ...rest}: any) => {
    return <PlusMinusContainer>
        <div className={`circle-plus closed${open ? ' opened' : ''}`}>
            <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
        </div>
    </PlusMinusContainer>
}

export default PlusMinusComponent