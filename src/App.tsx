import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import client from './graphql/client';
import UserNavigator from './navigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{flex: 1}}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <UserNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);

export default App;
