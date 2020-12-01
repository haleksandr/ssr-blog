import axios from 'axios';
import * as types from '../types';

export const fetchPosts = () => async (dispatch) => {
  const res = await axios.get('https://simple-blog-api.crew.red/posts');
  dispatch({
    type: types.GET_ALL_POSTS,
    payload: res.data,
  });
};

export const addPost = (text) => {
  type: types.ADD_POST;
  payload: text;
};
