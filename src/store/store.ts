
import { configureStore } from "@reduxjs/toolkit";
import userLogin from "./slices/userLogin";

const store = configureStore({
    reducer: {
        userLoginStore: userLogin
    }
})

export default store;


export type RootState = ReturnType<typeof store.getState>