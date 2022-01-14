import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState } from '../../../utils/interfaces'
import { setRegister } from './auth-actions'
// import type { RootState } from '../../app/store'

// Define a type for the slice state


// Define the initial state using that type
const initialState: IUserState = {
  email: null,
  name: null,
  dob: null,
  token: null
}

export const userSlice = createSlice({
  name: 'User',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logOut: (state) => {
      state = {
        email: null,
        name: null,
        dob: null,
        token: null
      }
    }

  },
  extraReducers: builder =>{
    builder.addCase(setRegister.pending,(state)=>{

    })
    builder.addCase(setRegister.rejected,(state,{payload})=>{

    })
    builder.addCase(setRegister.fulfilled,(state, {payload})=>{

    })
  }
})

export const { logOut } = userSlice.actions;


export default userSlice.reducer;