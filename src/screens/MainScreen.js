import React, {useEffect} from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {PostList} from '../components/PostList';
import {useDispatch, useSelector} from 'react-redux'
import {loadPosts} from '../store/actions/postActions';
import {DB} from '../db';

export const MainScreen = ({navigation}) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked});
  };

  const dispatch = useDispatch()

  useEffect(()=> {
    DB.init()
  })

  useEffect(() =>{
    dispatch(loadPosts())

  }, [dispatch])

  const allPosts = useSelector(state => state.post.allPosts)

  return <PostList data={allPosts} onOpen={openPostHandler}/>
};



MainScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Мой Блог',
  headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title="Take photo" iconName='ios-camera' onPress={() => navigation.push('Create')} />
  </HeaderButtons>,
  headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title="Toggle drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
  </HeaderButtons>,
});
