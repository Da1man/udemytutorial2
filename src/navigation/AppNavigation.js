import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Platform} from 'react-native';

import {MainScreen} from '../screens/MainScreen';
import {PostScreen} from '../screens/PostScreen';
import {BookedScreen} from '../screens/BookedScreen';
import {AboutScreen} from '../screens/AboutScreen';

import {THEME} from '../theme';

import Icon from 'react-native-vector-icons/Ionicons';
import {CreateScreen} from '../screens/CreateScreen';

const NavigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
  },
};

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: PostScreen,
}, NavigatorOptions);


const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Post: PostScreen,
}, NavigatorOptions);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Все',
      tabBarIcon: info => <Icon name={'ios-albums'} size={25} color={info.tintColor}/>,
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Избранное',
      tabBarIcon: info => <Icon name={'ios-star'} size={25} color={info.tintColor}/>,
    },
  },
};

const BottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTabsConfig, {
  activeTintColor: '#fff',
  shifting: true,
  barStyle: {
    backgroundColor: THEME.MAIN_COLOR,
  },
}) : createBottomTabNavigator(
  bottomTabsConfig,
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    },
  });

const AboutNavigator = createStackNavigator({
  About: AboutScreen,
}, NavigatorOptions)

const CreateNavigator = createStackNavigator({
  About: CreateScreen,
}, NavigatorOptions)

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
  },
  About: {
    screen: AboutNavigator,
  },
  Create: {
    screen: CreateNavigator,
  },
},
  {
    drawerType: 'slide',
  })

export const AppNavigation = createAppContainer(MainNavigator);
