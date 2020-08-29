import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '_scenes/home';
import DetailScreen from '_scenes/details';
import PhotoScreen from '_scenes/photo';
import Icons from 'react-native-vector-icons/FontAwesome';
import {PRIMARY, WHITE} from '_styles/colors';

const MainStack = createBottomTabNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName={'Home'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Photo') {
            iconName = focused ? 'photo' : 'photo';
          }

          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: WHITE,
        inactiveTintColor: '#212121',
        style: {
          backgroundColor: PRIMARY,
        },
      }}>
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
