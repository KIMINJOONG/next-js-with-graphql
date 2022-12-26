import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../assets/apis/apolloClient";
import { GlobalStyle } from 'styles/global-style';
import { ThemeProvider as ThemeProviderLegacy } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { color } from "styles/theme";
import '../public/fonts.css'

const themeLight = createTheme({
  typography: {
    fontFamily: [
      'Pretendard',
      'Montserrat'
    ].join(','),
  },
  palette: {
    background: {
      default: color.N0,
    },
    primary: {
      main: color.brand,
      contrastText: "#ffffff",
    },
    secondary: {
      main: color.second,
      contrastText: "#475467",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <ThemeProviderLegacy theme={themeLight}>
          <Component {...pageProps} />
        </ThemeProviderLegacy>
      </ThemeProvider>
    </ApolloProvider>
  );
}
