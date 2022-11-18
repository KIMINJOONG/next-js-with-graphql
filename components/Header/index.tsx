import React from "react";
import Image from 'next/image'
import Link from "next/link";

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
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
            <div style={{ padding: '4px 0px 10px 0px' }}>
                <Image src={require('../../assets/images/logo.png')} width={104} height={34} alt={"logo"} />
            </div>
            <ul style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: '21px 0px' }}>
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
            <div style={{ padding: '15px 0px 14px 0px', marginLeft: 37.77 }}>
                <Image style={{ marginRight: 9.74 }} src={require('../../assets/images/facebook.png')} width={31} height={31} alt={"facebook"} />
                <Image style={{ marginRight: 9.74 }} src={require('../../assets/images/youtube.png')} width={31} height={31} alt={"youtube"} />
                <Image style={{ marginRight: 9.74 }} src={require('../../assets/images/naver.png')} width={31} height={31} alt={'naver'} />
                <Image src={require('../../assets/images/insta.png')} width={31} height={31} alt={'insta'} />
            </div>
        </div>
    )
};

export default Header;