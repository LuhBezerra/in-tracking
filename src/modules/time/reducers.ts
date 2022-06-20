import { createSlice } from '@reduxjs/toolkit'

import { getStateStatus } from 'utils/status-state'
import { getTimes } from './actions'

import type { Status as StatusPayload } from 'types/redux'
import type { Status } from 'types/status'

type State = {
  timeList: Status[],
  status: StatusPayload
}

const initialState: State = {
  timeList: [],
  status: 'idle',
}

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTimes.fulfilled, (state, action) => {
        state.status = 'idle'
        state.timeList = action.payload 
      })
    getStateStatus(builder, getTimes)
  },
})

export const time = timeSlice.reducer
