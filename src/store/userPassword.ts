import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    user: null,
}

const userPasswordSlice = createSlice({
    name: 'userPassword',
    initialState,
    reducers: {
        userPasswordRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        userPasswordSuccess(state, action){
            state.isLoading = false;
            state.user = action.payload;
        },
        userPasswordFailed(state, action){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});


export const { userPasswordRequest, userPasswordSuccess, userPasswordFailed } = userPasswordSlice.actions;

export default userPasswordSlice.reducer;