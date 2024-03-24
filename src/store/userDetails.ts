import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    user: null
}

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        userDetailsRequest(state){
            state.isLoading = true;
            state.user = null;
            state.error = null;
        },
        userDetailsSuccess(state, action){
            state.isLoading = false;
            state.user = action.payload;
        },
        userDetailsFail(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { userDetailsRequest, userDetailsSuccess, userDetailsFail } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;