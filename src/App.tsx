import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import client from './graphql/client';
import UserNavigator from './navigation/Navigator';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <UserNavigator />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;