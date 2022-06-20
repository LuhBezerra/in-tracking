import { createSlice } from '@reduxjs/toolkit'
import humps from 'humps'

import { getStateStatus } from 'utils/status-state'
import {
  createTask,
  deleteTask,
  getFilteredTasks,
  getStandardTaskByMonth,
  getStandardTaskByTotalTime,
  getStandardTaskByWeek,
  getTasks,
  getTotalOverdueTasks,
  getTotalPendingTasks,
  getTotalPunctualTasks,
  getTotalRegisteredTasks,
  getTotalTasksByCategories,
  updateTask,
} from './actions'

import type { Status } from 'types/redux'
import type { Task } from 'types/task'

type State = {
  tasks: Task[]
  reports: {
    totalRegistered?: string
    totalPunctual?: string
    totalOverdue?: string
    totalPending?: string
    standardTaskByTotalTime?: string
    standardTaskByMonth?: string
    standardTaskByWeek?: string
    totalTasksByCategories?: [{ name: string; total: string; color: string }]
  }
  status: Status
}

const initialState: State = {
  tasks: [],
  reports: {},
  status: 'idle',
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTask.fulfilled, (state, action) => {
        /* const task = {...action.payload.0, categoryId: action.payload.categories.id}
        console.log({task}) */
        state.status = 'idle'
        state.tasks.push(action.payload)
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const payload = action.payload

        state.status = 'idle'
        state.tasks = state.tasks?.map(task => {
          if (task.id === payload.id) {
            return humps.camelizeKeys(action.payload)
          }

          return task
        }) as Task[]
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = 'idle'
        state.tasks = state.tasks.filter(task => task.id !== action.payload.taskId)
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = 'idle'
        state.tasks = humps.camelizeKeys(action.payload) as Task[]
      })
      .addCase(getTotalTasksByCategories.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalTasksByCategories = action.payload
      })
      .addCase(getFilteredTasks.fulfilled, (state, action) => {
        state.status = 'idle'
        state.tasks = humps.camelizeKeys(action.payload.tasks) as Task[]
      })
      .addCase(getTotalRegisteredTasks.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalRegistered = action.payload.total
      })
      .addCase(getTotalPunctualTasks.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalPunctual = action.payload.total
      })
      .addCase(getTotalOverdueTasks.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalOverdue = action.payload.total
      })
      .addCase(getTotalPendingTasks.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalPending = action.payload.total
      })
      .addCase(getStandardTaskByTotalTime.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalPending = action.payload.total
      })
      .addCase(getStandardTaskByMonth.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalPending = action.payload.total
      })
      .addCase(getStandardTaskByWeek.fulfilled, (state, action) => {
        state.status = 'idle'
        state.reports.totalPending = action.payload.total
      })
    getStateStatus(builder, createTask)
    getStateStatus(builder, updateTask)
    getStateStatus(builder, deleteTask)
    getStateStatus(builder, getTasks)
    getStateStatus(builder, getFilteredTasks)
    getStateStatus(builder, getTotalTasksByCategories)
    getStateStatus(builder, getTotalRegisteredTasks)
    getStateStatus(builder, getTotalPunctualTasks)
    getStateStatus(builder, getTotalOverdueTasks)
    getStateStatus(builder, getTotalPendingTasks)
    getStateStatus(builder, getStandardTaskByTotalTime)
    getStateStatus(builder, getStandardTaskByMonth)
    getStateStatus(builder, getStandardTaskByWeek)
  },
})

export const task = taskSlice.reducer
