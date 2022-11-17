import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LoginUserLogged {
    accessToken: string;
    refreshToken: string;
    user: string;
}
const initialState: LoginUserLogged = {
    accessToken: '',
    refreshToken: '',
    user: '',
}
const slice = createSlice({
    name: 'userPrefix',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<LoginUserLogged>) => {
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