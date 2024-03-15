import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    error: null,
    user: null
}

const userRegistrationSlice = createSlice({
    name: 'userRegistration',
    initialState: initialState,
    reducers: {
        registerUserRequest(state) {
            state.isLoading = true;
            state.error = null
        },
        registerUserSuccess(state, action) {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null
        },
        registerUserFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { registerUserRequest, registerUserSuccess, registerUserFailed } = userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;