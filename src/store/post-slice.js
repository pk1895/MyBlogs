import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
    name: "Post",
    initialState: {
        id: '',
        title: '',
        section: '',
        content: ''
    },
    reducers: {
        setPosts(state, action) {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.section = action.payload.section;
        },
        clearPost(state,action){
            state.id = '';
            state.title = '';
            state.content = '';
            state.section = '';
        }
    }
});

export const PostActions = PostSlice.actions;
export default PostSlice;