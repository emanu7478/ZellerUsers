import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen/UserScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const UserNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Users" component={UserScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default UserNavigator;
