import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { HeaderContainer } from "./headerContainer";

const MENUS = [
    {
        id: 1,
        name: 'PROJECT',
        href: '/project',
    },
    {
        id: 2,
        name: 'NEWS',
        href: '/news',
    },
    {
        id: 3,
        name: 'CONTACT',
        href: '/contact',
    }
]
const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-inner">
                <div className="header-sub">
                    <div>
                        <Image src={require('../../assets/images/logo.png')} width={104} height={34} alt={"logo"} />
                    </div>
                    <ul>
                        {MENUS.map((menu, index) => (
                            <li key={menu.id}>
                                <Link href={menu.href} style={{ marginLeft: index === 0 ? 0 : 36 }}>
                                    <span style={{ fontSize: 15, fontWeight: 500, }}>{menu.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>


                    {/* <span style={{fontSize:15, fontWeight: 500}}>PROJECT</span>
                        <span style={{marginLeft: 36,}}>NEWS</span>
                        <span style={{marginLeft: 36,}}>CONTACT</span> */}
                    <div style={{ marginLeft: 37.77 }}>
                        <Image style={{ marginRight: 9.74 }} src={require('../../assets/images/facebook.png')} width={31} height={31} alt={"facebook"} />
                        <Image style={{ marginRight: 9.74 }} src={require('../../assets/images/youtube.png')} width={31} height={31} alt={"youtube"} />
                        <Image style={{ marginRight: 9.74 }} src={require('../../assets/images/naver.png')} width={31} height={31} alt={'naver'} />
                        <Image src={require('../../assets/images/insta.png')} width={31} height={31} alt={'insta'} />
                    </div>
                </div>
            </div>
        </HeaderContainer>
    )
};

export default Header;