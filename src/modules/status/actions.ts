import { createAsyncThunk } from '@reduxjs/toolkit'
import * as servicesStatus from 'services/status'

export const getStatus = createAsyncThunk('GET_STATUS', async () => {
  const response = await servicesStatus.getStatus()
  return response.data
})
