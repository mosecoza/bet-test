import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsApi } from "../../../utils/functions";
import { INews, INewsRequest } from "../../../utils/interfaces";

export const getNews = createAsyncThunk("news/getNews", async ({ searchString="microfrontend", page=1}: INewsRequest, { dispatch }): Promise<INews> => {
    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow",

    };
    return await getNewsApi(`query=${searchString}&page=${page}`, requestOptions)
})

