import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../assets/apis/apolloClient";
import { GlobalStyle } from 'styles/global-style';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
