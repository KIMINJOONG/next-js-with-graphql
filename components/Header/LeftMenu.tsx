import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Typography } from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import styled from "styled-components"
import { color } from "styles/theme";

const LeftMenuContainer = styled.div`
    height: 100%; /* 100% Full-height */
    width: 100%; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 3; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #ffffff; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    .left-area {
        display: flex;
        flex-direction: column;
    }
    .link-path {
        margin-left: 30px;
        margin-bottom: 30px;
    }
    .sub-title {
        color: ${color.N55};
        font-weight: 600;
        font-size: 32px;
    }
    ul {
        li {
            color: ${color.N55};
            font-weight: 400;
            font-size: 20px;
            margin-bottom: 26px;
        }
        li:last-child {
            margin-bottom: 0px;
        }
    }
    

`

const CustomAccordion = styled((props: AccordionProps) => (
    <Accordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    // border: `1px solid ${theme.palette?.divider}`,
    // '&:not(:last-child)': {
    //   borderBottom: 0,
    // },
    '&:before': {
      display: 'none',
    },
    paddingLeft: 14,
    paddingTop: 14,
    paddingBottom: 14
}));


const LeftMenuComponent = ({setOpen, ...rest}: any) => {
    const [ openProject, setOpenProject ] = useState(false)
    return <LeftMenuContainer>
        <div className="left-area">
            <CustomAccordion expanded={openProject} onChange={() => setOpenProject(!openProject)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <span className="sub-title">PROJECT</span>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Link href={'/project?type=1'} onClick={() => setOpen(false)}><p>공연</p></Link>
                        </li>
                        <li>
                            <Link href={'/project?type=2'} onClick={() => setOpen(false)}><p>축제 및 행사</p></Link>
                        </li>
                        <li>
                            <Link href={'/project?type=3'} onClick={() => setOpen(false)}><p>극장</p></Link>
                        </li>
                    </ul>
                </AccordionDetails>
            </CustomAccordion>
            <Link className="link-path" href={'/news'}>
                <span className="sub-title">NEWS</span>
            </Link>
            <Link className="link-path" href={'/contact'}>
                <span className="sub-title">CONTACT</span>
            </Link>
        </div>
    </LeftMenuContainer>
}

export default LeftMenuComponent