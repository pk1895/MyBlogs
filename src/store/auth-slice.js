import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: {
        userId: '',
        isLogIn: false
    },
    reducers: {
        setUserData(state, action) {
            state.userId = action.payload.username;
            state.isLogIn = action.payload.isLogIn
        }
    }
});
export const authActions = AuthSlice.actions;
export default AuthSlice;