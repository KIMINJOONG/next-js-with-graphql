import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GQL_DOMAIN } from "../utils/ENV";

// 새로운 apollo client 만들기
const client = new ApolloClient({
  uri: GQL_DOMAIN,
  cache: new InMemoryCache(),
});

export default client;