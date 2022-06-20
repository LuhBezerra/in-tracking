import { createAsyncThunk } from '@reduxjs/toolkit'
import * as servicesAuth from 'services/authentication'
import { LogIn, SignUp } from 'types/authentication'

export const signUp = createAsyncThunk('AUTH_SIGN_UP', async (payload: SignUp) => {
  const response = await servicesAuth.signUp(payload)
  localStorage.setItem('token', response.data.token)

  return response.data
})

export const logIn = createAsyncThunk('AUTH_LOG_IN', async (payload: LogIn) => {
  const response = await servicesAuth.logIn(payload)
  localStorage.setItem('token', response.data.token)

  return response.data
})

export const logOut = createAsyncThunk('AUTH_LOG_OUT', async () => {
  const response = await servicesAuth.logOut()
  return response.data
})
