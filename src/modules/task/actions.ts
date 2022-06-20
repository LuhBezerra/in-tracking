import { createAsyncThunk } from '@reduxjs/toolkit'
import * as servicesTask from 'services/task'

import type { UpdateTask, FiltersTasks } from 'services/task'
import type { Task } from 'types/task'

type Report = {
  total: string
}

export const createTask = createAsyncThunk('CREATE_TASK', async (payload: Task) => {
  const response = await servicesTask.createTask(payload)
  return response.data
})

export const updateTask = createAsyncThunk(
  'UPDATE_TASK',
  async ({ taskId, payload }: UpdateTask) => {
    await servicesTask.updateTask({ taskId, payload })
    return payload
  }
)

export const deleteTask = createAsyncThunk('DELETE_TASK', async (taskId: string) => {
  await servicesTask.deleteTask(taskId)
  return { taskId }
})

export const getTasks = createAsyncThunk('GET_TASK', async () => {
  const response = await servicesTask.getTasks()
  return response.data
})

export const getTotalTasksByCategories = createAsyncThunk(
  'TOTAL_TASKS_BY_CATEGORIES',
  async () => {
    const response = await servicesTask.getTotalTasksByCategories()
    return response.data
  }
)

export const getTotalRegisteredTasks = createAsyncThunk('TOTAL_REGISTERED_TASKS', async () => {
  const response = await servicesTask.getTotalRegisteredTasks()
  return response.data as Report
})

export const getTotalPunctualTasks = createAsyncThunk('TOTAL_PUNCTUAL_TASKS', async () => {
  const response = await servicesTask.getTotalRegisteredTasks()
  return response.data as Report
})

export const getTotalOverdueTasks = createAsyncThunk('TOTAL_OVERDUE_TASKS', async () => {
  const response = await servicesTask.getTotalOverdueTasks()
  return response.data as Report
})

export const getTotalPendingTasks = createAsyncThunk('TOTAL_PENDING_TASKS', async () => {
  const response = await servicesTask.getTotalPendingTasks()
  return response.data as Report
})

export const getFilteredTasks = createAsyncThunk(
  'GET_FILTERED_TASKS',
  async (queries: FiltersTasks) => {
    const response = await servicesTask.getFilteredTasks(queries)
    return response.data
  }
)

export const getStandardTaskByTotalTime = createAsyncThunk(
  'STANDARD_TASKS_BY_TOTAL_TIME',
  async () => {
    const response = await servicesTask.getStandardTaskByTotalTime()
    return response.data
  }
)

export const getStandardTaskByWeek = createAsyncThunk(
  'STANDARD_TASKS_BY_WEEK',
  async () => {
    const response = await servicesTask.getStandardTaskByWeek()
    return response.data
  }
)

export const getStandardTaskByMonth = createAsyncThunk(
  'STANDARD_TASKS_MONTH',
  async () => {
    const response = await servicesTask.getStandardTaskByMonth()
    return response.data
  }
)
