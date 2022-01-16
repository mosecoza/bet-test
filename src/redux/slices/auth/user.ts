import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState } from '../../../utils/interfaces'
import { setRegister } from './user-actions'

// Define a type for the slice state


// Define the initial state using that type
const initialState: IUserState = {
  email: null,
  name: null,
  dob: null,
  token: null,
  loggedIn: false
}

export const user = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:initialState,
  reducers: {
    logOut: (state) => {
      state = {
        email: null,
        name: null,
        dob: null,
        token: null,
        loggedIn: false
      }
    }

  },
  extraReducers: builder =>{
    builder.addCase(setRegister.pending,(state)=>{

    })
    builder.addCase(setRegister.rejected,(state,{payload})=>{

    })
    builder.addCase(setRegister.fulfilled,(state,{payload})=>{

    })
  }
})

export const { logOut } = user.actions;


export default user.reducer;