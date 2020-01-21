import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {MainScreen} from './MainScreen';
import {DataBase} from '../db';


export const AboutScreen = ({}) => {
  return <View style={styles.center}>
    <Text>Это лучшее приложение для личных заметок</Text>
    <Text>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
    <Button title={'connect db'} onPress={() => DataBase.initDB()}/>
    <Button title={'connect db'} onPress={() => DataBase.getPosts()}/>
  </View>;
};

AboutScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'О приложении',
  headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title="Toggle drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
  </HeaderButtons>,
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontFamily: 'OpenSans-Bold'
  }
});
