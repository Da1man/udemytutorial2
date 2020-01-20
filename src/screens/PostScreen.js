import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DATA} from '../data';
import {THEME} from '../theme';
import {toggleBooked} from '../store/actions/postActions';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

export const PostScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const postId = navigation.getParam('postId');

  const post = DATA.find(p => p.id === postId);

  const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId ))

  useEffect(() => {
    navigation.setParams({booked})
  }, [booked])


  const toggleHandler = useCallback(() => {
    console.log('toggleHandler')
    dispatch(toggleBooked(postId));
  }, [dispatch, postId])

  useEffect(() => {
    navigation.setParams({toggleHandler});
  },[toggleHandler]);

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост',
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить', style: 'destructive', onPress: () => {
          },
        },
      ],
      {cancelable: false},
    );

  };

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
  const booked = navigation.getParam('booked');
  const toggleHandler = navigation.getParam('toggleHandler');
  const iconName = booked ? 'ios-star' : 'ios-star-outline';
  return {
    headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
    headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Take photo" iconName={iconName} onPress={toggleHandler}/>
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
