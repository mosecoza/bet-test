import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState } from '../../../utils/interfaces'
import { getProfile, login } from './user-actions'

// Define a type for the slice state


// Define the initial state using that type
const initialState: IUserState = {
  user: {
    email:'', name:"", userId:0
  },
  token: undefined,
  loggedIn: false,
  isLoading: false
}

export const user = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:initialState,
  reducers: {
    logOut: (state) => {
      state = {
        user:{
          email:'', name:"", userId:0
        },
        token: undefined,
        loggedIn: false,
        isLoading: false,
      }
    }

  },
  extraReducers: builder =>{
    builder.addCase(getProfile.pending,(state)=>{
      state.isLoading = true
    })
    builder.addCase(getProfile.rejected,(state,{payload})=>{
      state.loggedIn = false
      state.token= undefined
      state.isLoading = false
    })
    builder.addCase(getProfile.fulfilled,(state,{payload})=>{

    })
    builder.addCase(login.pending,(state)=>{
      state.isLoading = true
    })
    builder.addCase(login.rejected,(state,{payload})=>{
      state.loggedIn = false
      state.token = undefined
      state.isLoading = false
      state.user = {
        email:'', name:"", userId:0
      }
    })
    builder.addCase(login.fulfilled,(state,{payload})=>{

      if(payload){

        state.loggedIn = true
        state.token= payload.access_token
        state.user= payload.user
        state.isLoading = false
      } else{
        state.loggedIn = false
      state.token= undefined
      state.isLoading = false
      }
    })
  }
})

export const { logOut } = user.actions;


export default user.reducer;