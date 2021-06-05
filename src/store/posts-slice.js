import { createSlice } from '@reduxjs/toolkit';

const PostsSlice = createSlice({
    name: 'Posts',
    initialState: {
        items: [],
        postDetailItem: {
            id: '',
            title: '',
            section: '',
            content: ''
        }
    },
    reducers: {
        setPostData(state, action) {
            const existingItem = state.items.find((el) => el.id === action.payload.id);
            if (!existingItem) {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.item.title,
                    content: action.payload.item.content,
                    section: action.payload.item.section
                });
            }
        },

        setPost(state, action) {
            const [postDetailItem] = state.items.filter(el => el.id === action.payload.id);
            state.postDetailItem = postDetailItem;
        },

        clearPost(state, action) {
            state.items = [];
            state.postDetailItem = {};
        }
    }
});

export const PostsAction = PostsSlice.actions;
export default PostsSlice;