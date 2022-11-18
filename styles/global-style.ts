import { createGlobalStyle } from 'styled-components';
import { color, media } from './theme';

export const GlobalStyle = createGlobalStyle`
    html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
