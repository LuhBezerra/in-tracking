import { createAsyncThunk } from '@reduxjs/toolkit'
import * as servicesTime from 'services/time'

export const getTimes = createAsyncThunk('GET_TIMES', async () => {
  const response = await servicesTime.getTimes()
  return response.data
})
