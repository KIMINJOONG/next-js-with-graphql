import { ApolloClient, InMemoryCache } from "@apollo/client";

// 새로운 apollo client 만들기
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;
