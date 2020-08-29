import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '_scenes/home';
import DetailScreen from '_scenes/details';
import PhotoScreen from '_scenes/photo';

const MainStack = createBottomTabNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Photo" component={PhotoScreen} />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="Details" component={DetailScreen} />
    </RootStack.Navigator>
  );
}
const AppNavigator = RootStackScreen;

export default AppNavigator;
