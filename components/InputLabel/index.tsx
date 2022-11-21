import React from "react";
import { color } from "styles/theme";


interface IProps {
    text: string;
}

const InputLabel = ({ text }: IProps) => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ position: 'relative', }}>
                <i style={{ position: 'absolute', top: 0, right: -10, width: 4, height: 4, borderRadius: 2, backgroundColor: color.brand }} />
                <label style={{ fontSize: 17, fontWeight: 500 }}>{text}</label>
            </div>
        </div>
    );
};

export default InputLabel;