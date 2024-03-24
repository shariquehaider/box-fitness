import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./userLogin";
import userRegistrationReducer from "./userRegistration";
import userUpdateReducer from "./userUpdate";
import userPasswordReducer from "./userPassword";
import userDetailsReducer from "./userDetails";


const store = configureStore({
    reducer: {
        userRegister: userRegistrationReducer,
        userLogin: userLoginReducer,
        userUpdate: userUpdateReducer,
        userPassword: userPasswordReducer,
        userDeTails: userDetailsReducer
    }
});

export default store;