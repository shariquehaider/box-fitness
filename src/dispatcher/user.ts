import { userLoginSuccess, userLoginFailed, userLoginRequest } from "@/store/userLogin";
import { registerUserRequest, registerUserSuccess, registerUserFailed } from "@/store/userRegistration";
import { userPasswordFailed, userPasswordRequest, userPasswordSuccess } from "@/store/userPassword";
import { userUpdateFailed, userUpdateRequest, userUpdateSuccess } from "@/store/userUpdate";
import { LoginUser, RegisterUser, UserDetails, UserPassword } from "./userInterface";
import { Dispatch } from "@reduxjs/toolkit";
import { userDetailsFail, userDetailsRequest, userDetailsSuccess } from "@/store/userDetails";

export const userRegisterDispatchAction = (payload: RegisterUser) => async (dispatch: Dispatch) => {
    dispatch(registerUserRequest());
    try{
        console.log(payload)
        const response = await fetch("http://localhost:8000/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        console.log(response);
        const data = await response.json();
        console.log(data)
        dispatch(registerUserSuccess(data));
    } catch (error) {
        dispatch(registerUserFailed(error));
    }
}

export const userLoginDispatchAction = (payload: LoginUser) => async (dispatch: Dispatch) => {
    dispatch(userLoginRequest());
    try {
        const response = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        dispatch(userLoginSuccess(data));
    } catch (error: any) {
        dispatch(userLoginFailed(error));
    }
}

export const userUpdateDispatchAction = (payload: UserDetails) => async (dispatch: Dispatch) => {
    dispatch(userUpdateRequest());
    try {
        const token = localStorage.getItem('Token');
        const userId = localStorage.getItem('UserID');
        const response = await fetch(`/user/update/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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

export const userDetailsDispatchAction = () => async (dispatch: Dispatch) => {
    dispatch(userDetailsRequest());
    try {
        const token = localStorage.getItem('Token');
        const userId = localStorage.getItem('UserID');
        const response = await fetch(`/user/login/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const data = response.json();
        dispatch(userDetailsSuccess(data));
    } catch (error) {
        dispatch(userDetailsFail(error));
    }
}