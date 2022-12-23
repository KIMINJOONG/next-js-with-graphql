import { createGlobalStyle } from 'styled-components';
import { color, media, size } from './theme';

export const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        font-family: Pretendard;
    }

    /* width */
    /* ::-webkit-scrollbar {
        width: 13px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${color.brand}; 
        border-radius: 26px;
    } */
    
    h1 {
       font-weight: 600;
       color: ${color.N55};
       font-size: 50px;
    }

    h2 {
        font-weight: 600;
        color: ${color.N55};
        font-size: 22px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    ol, li, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
    }

    input {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }

        body {
            color: ${color.N60};
            background: ${color.N0};
        }
    }

    .img {
        animation: rotate_image 30s linear infinite;
        transform-origin: 50% 50%;
    }

    @keyframes rotate_image {
        100% {
            transform: rotate(360deg);
        }
    }
`;
