import { createSlice } from '@reduxjs/toolkit'

import { Status } from 'types/redux'
import { getStateStatus } from 'utils/status-state'

import { logIn, logOut, signUp } from './actions'

export interface Auth {
  token?: string | null
  status: Status
}

const initialState: Auth = {
  token: undefined,
  status: 'idle',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'idle'
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = 'idle'
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.status = 'idle'
        localStorage.removeItem('token')
      })
    getStateStatus(builder, signUp)
    getStateStatus(builder, logIn)
    getStateStatus(builder, logOut)
  },
})

export const auth = authSlice.reducer
