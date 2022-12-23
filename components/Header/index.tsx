import React, { Fragment, MouseEvent, useCallback, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { HeaderContainer } from "./headerContainer";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import { size } from "styles/theme";
import HamburgerComponent from "./Hamburger";
import LeftMenuComponent from "./LeftMenu";
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

interface IHeader {
    type?: number
}


const Header = (props: IHeader) => {
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const onClickMenu = (e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>, href: string) => {
        const taget = e.target as HTMLElement;
        if (taget.className === 'dropdown-background') {
            return
        }
        e.stopPropagation();
        router.push(href)
    }

    const onClickSocial = useCallback((url: string) => {
        window.open(url);
    }, []);

    const isMobile = useMediaQuery(`(max-width : ${size.mobile}px)`);

    return (
        <Fragment>
            <HeaderContainer>
                <div className="header-inner">
                    <div className="header-sub">
                        <Link href={'/'}>
                            <Image src={require('../../assets/images/logo.png')} width={104} height={34} alt={"logo"} />
                        </Link>
                        {isMobile ? <HamburgerComponent open={open} onClick={() => setOpen(!open)}/> : <Fragment>
                            <ul className="menus">
                                {MENUS.map((menu, index) => (
                                    <li key={menu.id} className={`menu-item ${menu.hover}`} onClick={(e) => onClickMenu(e, menu.href)}>
                                        <a className="menu-href">
                                            <span style={{ fontSize: 15, fontWeight: 500, }}>{menu.name}</span>
                                            <div className={`munu-underline ${props.type ? (props.type - 1 === index ? 'active' : '') : ''}`} />
                                        </a>
                                        {menu.hover && <div className="dropdown-content">
                                            <div className="dropdown-background" />
                                            <ul>
                                                <li onClick={(e) => onClickMenu(e, '/project?type=1')}>
                                                    공연
                                                </li>
                                                <li onClick={(e) => onClickMenu(e, '/project?type=2')}>
                                                    축제 및 행사
                                                </li>
                                                <li onClick={(e) => onClickMenu(e, '/project?type=3')}>
                                                    극장
                                                </li>
                                            </ul>

                                        </div>}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginLeft: 37.77 }}>
                                <Image style={{ marginRight: 9.74, cursor: 'pointer' }} src={require('../../assets/images/facebook.png')} width={31} height={31} alt={"facebook"} onClick={() => onClickSocial('https://www.facebook.com/nabilera.official?mibextid=ZbWKwL')} />
                                <Image style={{ marginRight: 9.74, cursor: 'pointer' }} src={require('../../assets/images/youtube.png')} width={31} height={31} alt={"youtube"} onClick={() => onClickSocial('https://youtube.com/channel/UC69_LSbhYcZFuaprQuXkFnA')} />
                                <Image style={{ marginRight: 9.74, cursor: 'pointer' }} src={require('../../assets/images/naver.png')} width={31} height={31} alt={'naver'} onClick={() => onClickSocial('https://m.blog.naver.com/PostList.naver?blogId=nabilera2020')} />
                                <Image style={{ cursor: 'pointer' }} src={require('../../assets/images/insta.png')} width={31} height={31} alt={'insta'} onClick={() => onClickSocial('https://instagram.com/nabilera.official?igshid=YmMyMTA2M2Y=')} />
                            </div>    
                        </Fragment>}
                    </div>
                </div>
            </HeaderContainer>
            {isMobile && open && <LeftMenuComponent setOpen={setOpen}/>}
        </Fragment>
    )
};

export default Header;