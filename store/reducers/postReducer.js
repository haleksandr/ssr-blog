import * as types from '../types';

const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case types.ADD_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
