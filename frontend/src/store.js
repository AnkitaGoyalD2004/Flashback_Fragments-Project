import { configureStore } from "@reduxjs/toolkit";

import PostsSlice from "./features/Posts/PostsSlice";
import UserSlice from "./features/User/UserSlice";

export const store = configureStore({
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({

    }),
reducer:{
postReducer:
userState:
    }
})