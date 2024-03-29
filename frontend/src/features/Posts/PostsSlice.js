import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  posts: [],
  currentPostId: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: defaultState,
  reducers: {
    setAllPosts: (state, action) => {
      //reducer to set the state of the post
      console.log(action.payload);
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      //add the post after creating it
      state.posts = [...state.posts, action.payload];
    },
    selectPost: (state, action) => {
      //reducer to select the post
      state.currentPostId = action.payload;
    },
    updatePost: (state, action) => {
      //update the post after finding it
      let updatedPosts = state.posts.map((post) => {
        if (post._id == action.payload._id) {
          return action.payload;
        } else {
          return post;
        }
      });
      state.posts = updatedPosts;
      state.currentPostId = null;
    },
    deletePost: (state, action) => {
      //remove the post from the redux store
      let updatedPosts = state.posts.filter((post) => {
        return post._id != action.payload;
      });
      state.posts = updatedPosts;
    },
    increaseLike: (state, action) => {
      //increase the number of likes
      let thePost = state.posts.find((post) => {
        return post._id == action.payload;
      });
      thePost.likeCount++;
    },
  },
});

export const {
  setAllPosts,
  addPost,
  updatePost,
  deletePost,
  increaseLike,
  selectPost,
} = postsSlice.actions;

export default postsSlice.reducer;
