import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: null,
    user: null
}

const userUpdateSlice = createSlice({
    name: 'userUpdate',
    initialState,
    reducers: {
        userUpdateRequest(state){
            state.isLoading = true;
            state.error = null;
        },
        userUpdateSuccess(state, action){
            state.isLoading = false;
            state.user = action.payload;
        },
        userUpdateFailed(state, action){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { userUpdateRequest, userUpdateSuccess, userUpdateFailed } = userUpdateSlice.actions;

export default userUpdateSlice.reducer;
