import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./userLogin";
import userRegistrationReducer from "./userRegistration";
import userUpdateReducer from "./userUpdate";
import userPasswordReducer from "./userPassword";


const store = configureStore({
    reducer: {
        userRegister: userRegistrationReducer,
        userlogin: userLoginReducer,
        userUpdate: userUpdateReducer,
        userPassword: userPasswordReducer
    }
});

export default store;