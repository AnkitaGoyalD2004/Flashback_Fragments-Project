import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  posts: [],
  currentId: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: defaultState,
  reducers: {
    setAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: () => {},
    selectPost: () => {},
    updatePost: () => {},
    deletePost: () => {},
    increaseLike: () => {},
  },
});

export default postsSlice;
