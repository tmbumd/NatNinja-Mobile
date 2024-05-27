import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../NatNinja-Mobile/screens/HomeScreen';
import RegisterScreen from '../NatNinja-Mobile/screens/RegisterScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
