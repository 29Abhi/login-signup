import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

interface AuthState {
    user : User | null;
    isLoading : boolean;
    error : string | null;
}

const initialState : AuthState ={
    user : null,
    isLoading: false,
    error: null,
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        registerUser(state, action : PayloadAction<User>){
            state.isLoading = true;
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        registerUserFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
          },
    }
})

export const { registerUser, registerUserFailed } = authSlice.actions;
export default authSlice.reducer;