import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { auth } from 'modules/auth/reducers'
import { category } from 'modules/category/reducers'
import { task } from 'modules/task/reducers'
import { status } from 'modules/status/reducers'
import { time } from 'modules/time/reducers'

export const store = configureStore({
  reducer: {
    auth,
    category,
    task,
    status,
    time,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
