import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {Platform} from 'react-native';
import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {THEME} from '../theme';
import {BookedScreen} from '../screens/BookedScreen';

import Icon from 'react-native-vector-icons/Ionicons'

const NavigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
}

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: PostScreen,
}, NavigatorOptions );


const BookedNavigator = createStackNavigator ({
  Booked: BookedScreen,
  Post: PostScreen,
}, NavigatorOptions );

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Все',
      tabBarIcon: info =>  <Icon name={'ios-albums'} size={25} color={info.tintColor}/>
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Избранное',
      tabBarIcon: info => <Icon name={'ios-star'} size={25} color={info.tintColor}/>
    }
  },
}

const BottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTabsConfig, {
  activeTintColor: '#fff',
  shifting: true,
  barStyle: {
    backgroundColor: THEME.MAIN_COLOR
  }
}) : createBottomTabNavigator(
  bottomTabsConfig,
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    }
  })

export const AppNavigation = createAppContainer(BottomNavigator);
