import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    user: null
}

const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        userLoginRequest(state){
            state.isLoading = true;
            state.error = null;
            state.user = null;
        },
        userLoginSuccess(state, action){
            state.isLoading = false;
            state.user = action.payload;
        },
        userLoginFailed(state, action){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { userLoginRequest, userLoginSuccess, userLoginFailed } = userLoginSlice.actions;

export default userLoginSlice.reducer;