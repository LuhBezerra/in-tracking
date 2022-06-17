import { createAsyncThunk } from '@reduxjs/toolkit'
import * as servicesAuth from 'services/authentication'
import { SignUp } from 'types/authentication'

export const signUp = createAsyncThunk('AUTH', async (payload: SignUp) => {
  const response = await servicesAuth.signUp(payload)
  return response.data
})
