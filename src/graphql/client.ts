import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import awsconfig from '../../aws-exports';

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': awsconfig.aws_appsync_apiKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
