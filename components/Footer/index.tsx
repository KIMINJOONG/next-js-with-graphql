import React from "react";
import { FooterContainer } from "./footerContainer";


const Footer = () => {
    return (
        <FooterContainer>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ fontSize: 13, color: '#5A544B' }}>Tel. 041-406-8998   l   E. nabilera2020@naver.com</p>
                <p style={{ fontSize: 13, color: '#5A544B' }}>Addr. Hongseong. Korea   l   Biz License. 888-32-01017</p>
            </div>
        </FooterContainer>
    )
};

export default Footer;