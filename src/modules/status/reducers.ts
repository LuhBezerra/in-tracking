import { createSlice } from '@reduxjs/toolkit'

import { getStateStatus } from 'utils/status-state'
import { getStatus } from './actions'

import type { Status as StatusPayload } from 'types/redux'
import type { Status } from 'types/status'

type State = {
  statusList: Status[],
  status: StatusPayload
}

const initialState: State = {
  statusList: [],
  status: 'idle',
}

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getStatus.fulfilled, (state, action) => {
        state.status = 'idle'
        state.statusList = action.payload 
      })
    getStateStatus(builder, getStatus)
  },
})

export const status = statusSlice.reducer
