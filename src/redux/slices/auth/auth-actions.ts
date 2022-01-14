import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser } from "../../../utils/services";

export const setRegister = createAsyncThunk("auth/setRegister", async (token: any, { dispatch }) => {
    return createUser
})