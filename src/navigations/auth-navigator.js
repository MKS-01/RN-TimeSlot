import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '_scenes/login';

const Stack = createStackNavigator();

function AuthNavigatorConfig() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={SignInScreen} />
    </Stack.Navigator>
  );
}

const AuthNavigator = AuthNavigatorConfig;

export default AuthNavigator;
