import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth-slice';
import PostSlice from './post-slice';

const store = configureStore({
    reducer: { auth: AuthSlice.reducer, post: PostSlice.reducer }
});

export default store;