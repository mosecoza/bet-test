import { createSlice } from '@reduxjs/toolkit'
import { INewsState } from '../../../utils/interfaces'
import { getNews } from './news-actions'

// Define a type for the slice state


// Define the initial state using that type
const initialState: INewsState = {
  news: null,
  isLoading: false
}

export const news = createSlice({
  name: 'news',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:initialState,
  reducers: {
    

  },
  extraReducers: builder =>{
    builder.addCase(getNews.pending,(state)=>{
      state.isLoading =true
    })
    builder.addCase(getNews.rejected,(state,{payload})=>{
      state.isLoading = false;
      state.news= null
    })
    builder.addCase(getNews.fulfilled,(state,{payload})=>{
      console.log("getNews.fulfilled payload: ", payload);
      
      state.isLoading = false;
      state.news= payload
    })
  }
})

export const {  } = news.actions;


export default news.reducer;