import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth-slice';
import PostSlice from './post-slice';
import PostsSlice from './posts-slice';

const store = configureStore({
    reducer: { auth: AuthSlice.reducer, post: PostSlice.reducer, posts: PostsSlice.reducer }
});

export default store;