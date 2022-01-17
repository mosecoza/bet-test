import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth } from "../../../utils/interfaces";
import { createUser, signIn } from "../../../utils/services";

export const getProfile = createAsyncThunk("auth/setRegister", async (token: any, { dispatch }) => {
    return createUser(token)
})
export const login = createAsyncThunk("auth/login", async (token: IAuth, { dispatch }) => {
    const res = await signIn(token)
    console.log("login createAsyncThunk response: ", res);

    return res? res: undefined
})