import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { HeaderContainer } from "./headerContainer";

const MENUS = [
    {
        id: 1,
        name: 'PROJECT',
        href: '/project?type=1',
        hover: 'hover-active'
    },
    {
        id: 2,
        name: 'NEWS',
        href: '/news',
        hover: ''
    },
    {
        id: 3,
        name: 'CONTACT',
        href: '/contact',
        hover: ''
    }
]


const Header = () => {
    return (
        <HeaderContainer>
            <div className="header-inner">
                <div className="header-sub">
                    <Link href={'/'}>
                        <Image src={require('../../assets/images/logo.png')} width={104} height={34} alt={"logo"} />
                    </Link>
                    <ul className="menus">
                        {MENUS.map((menu, index) => (
                            <li key={menu.id} className={`menu-item ${menu.hover}`}>
                                <Link className="menu-href" href={menu.href}>
                                    <span style={{ fontSize: 15, fontWeight: 500, }}>{menu.name}</span>
                                </Link>
                                {menu.hover && <div className="dropdown-content">
                                    <div className="dropdown-background" />
                                    <ul>
                                        <li>
                                            공연
                                        </li>
                                        <li>
                                            축제 및 행사
                                        </li>
                                        <li>
                                            극장
                                        </li>
                                    </ul>

                                </div>}
                            </li>
                        ))}
                    </ul>
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