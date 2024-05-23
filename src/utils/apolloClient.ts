import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://exam.backend.solotrip.kr/graphql",
  cache: new InMemoryCache(),
});

export default client;