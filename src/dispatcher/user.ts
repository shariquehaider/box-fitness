import { userLoginSuccess, userLoginFailed, userLoginRequest } from "@/store/userLogin";
import { registerUserRequest, registerUserSuccess, registerUserFailed } from "@/store/userRegistration";
import { userPasswordFailed, userPasswordRequest, userPasswordSuccess } from "@/store/userPassword";
import { userUpdateFailed, userUpdateRequest, userUpdateSuccess } from "@/store/userUpdate";
import { LoginUser, RegisterUser, UpdateUser, UserPassword } from "./userInterface";
import { Dispatch } from "@reduxjs/toolkit";

export const userRegisterDispatchAction = (payload: RegisterUser) => async (dispatch: Dispatch) => {
    dispatch(registerUserRequest());
    try{
        const response = await fetch("/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        dispatch(registerUserSuccess(data));
    } catch (error) {
        dispatch(registerUserFailed(error));
    }
}

export const userLoginDispatchAction = (payload: LoginUser) => async (dispatch: Dispatch) => {
    dispatch(userLoginRequest());
    try {
        const response = await fetch("/user/login", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        dispatch(userLoginSuccess(data));
    } catch (error) {
        dispatch(userLoginFailed(error));
    }
}

export const userUpdateDispatchAction = (payload: UpdateUser) => async (dispatch: Dispatch) => {
    dispatch(userUpdateRequest());
    try {
        const response = await fetch('/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        dispatch(userUpdateSuccess(data));
    } catch (error) {
        dispatch(userUpdateFailed(error));
    }
}

export const userPasswordDispatchAction = (payload: UserPassword) => async (dispatch: Dispatch) => {
    dispatch(userPasswordRequest());
    try {
        const response = await fetch('/user/update/password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        dispatch(userPasswordSuccess(data));
    } catch (error) {
        dispatch(userPasswordFailed(error));
    }
}