import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LoginUser {
    accessToken: string;
    refreshToken: string;
    user: string;
}
const initialState: LoginUser = {
    accessToken: '',
    refreshToken: '',
    user: '',
}
const slice = createSlice({
    name: 'userPrefix',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<LoginUser>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
        },
        deleteUser: (state) => {
            state.user = '';
            state.accessToken = '';
            state.refreshToken = '';
        }
    }
})
export const { deleteUser, updateUser } = slice.actions
export default slice.reducer
export const userLogged = (state: RootState) => state.userLoginStore.user