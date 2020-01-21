import {LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST} from '../types';
import {DataBase} from '../../db';
// import {DATA} from '../../data';

export const loadPosts =  () => {
  return async dispatch => {

    const posts = await DataBase.getPosts()

    dispatch({
      type: LOAD_POSTS,
        payload: posts,
    })
  }
}

export const toggleBooked = id => {
  return {
    type: TOGGLE_BOOKED,
    payload: id,
  }
}

export const removePost = id => {
  return {
    type: REMOVE_POST,
    payload: id,
  }
}

export const addPost = post => {
  post.id = Date.now().toString()
  return {
    type: ADD_POST,
    payload: post
  }
}
