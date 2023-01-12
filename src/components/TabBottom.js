import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Feather';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import ViewAll from '../screens/ViewAll';
import SignIn from '../screens/SignIn';

const Tab = createBottomTabNavigator();
const login = true;

const TabBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#28907D',
        tabBarStyle: {
          backgroundColor: '#0A2647',
          height: 60,
          borderTopWidth: 0,
          paddingBottom: 7,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListMovie"
        component={ViewAll}
        options={{
          headerShown: false,
          tabBarLabel: 'List Movies',
          tabBarIcon: ({color, size}) => (
            <Icon name="film" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBottom;
