import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Platform} from 'react-native'
import {THEME} from '../theme';
import Icon from 'react-native-vector-icons/Ionicons'


export const AppHeaderIcon = props => {
  return (
    <HeaderButton
      {...props}
      iconSize={24}
      IconComponent={Icon}
      color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR} />
  )
}
