import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Platform} from 'react-native';
import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {THEME} from '../theme';
import {BookedScreen} from '../screens/BookedScreen';

import Icon from 'react-native-vector-icons/Ionicons'

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen,
  }
}, {
   initialRouteName: 'Main',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
  });


const BookedNavigator = createStackNavigator ({
  Booked: BookedScreen,
  Post: PostScreen,
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
})

const BottomNavigator = createBottomTabNavigator({
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info =>  <Icon name={'ios-albums'} size={25} color={info.tintColor}/>
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => <Icon name={'ios-star'} size={25} color={info.tintColor}/>
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    }
  })

export const AppNavigation = createAppContainer(BottomNavigator);
