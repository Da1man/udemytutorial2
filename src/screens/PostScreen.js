import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native';
import {DATA} from '../data';
import {THEME} from '../theme';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

export const PostScreen = ({navigation}) => {
  const postId = navigation.getParam('postId');

  const post = DATA.find(p => p.id === postId);

  // useEffect(() => {
  //   navigation.setParams({booked: reducers.booked})
  // }, [])

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {text: 'Удалить', style:'destructive', onPress: () => {}},
      ],
      {cancelable: false},
    );

  }

  return (
    <View>
      <Image source={{uri: post.img}} style={styles.image}/>
      <ScrollView style={styles.textwrap}>
        <Text style={styles.title}>{post.text}</Text>
      </ScrollView>
      <Button title={'Удалить'} color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </View>
  );
};

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date');
  const booked = navigation.getParam('booked')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
    headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Take photo" iconName={iconName} onPress={() => console.log('aaaaaaaaaa')} />
    </HeaderButtons>,
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textwrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'OpenSans-Regular',
  },

});
