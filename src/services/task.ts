import axios from 'axios'

import { API_URL } from 'config/environment'
import { getToken } from 'utils/get-token'

import type { Task } from 'types/task'

export type UpdateTask = {
  taskId: Task['id']
  payload: Task
}

export type FiltersTasks = {
  timeId: string
  statusId: string
  categoryId: string
}

export const createTask = (payload: Task) =>
  axios.post(`${API_URL}/task`, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const updateTask = ({ taskId, payload }: UpdateTask) =>
  axios.post(`${API_URL}/task/${taskId}`, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const deleteTask = (taskId: string) =>
  axios.delete(`${API_URL}/task/${taskId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const getTasks = () =>
  axios.get(`${API_URL}/task`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const getTotalRegisteredTasks = () =>
  axios.get(`${API_URL}/task/total-registered-tasks`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const getTotalPunctualTasks = () =>
  axios.get(`${API_URL}/task/total-punctual-tasks`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const getTotalOverdueTasks = () =>
  axios.get(`${API_URL}/task/total-overdue-tasks`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const getTotalPendingTasks = () =>
  axios.get(`${API_URL}/task/total-pending-tasks`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const getFilteredTasks = ({ timeId, statusId, categoryId }: FiltersTasks) =>
  axios.get(
    `${API_URL}/task/tasks-by-time-status-category/${timeId || '0'}/${statusId || '0'}/${
      categoryId || '0'
    }`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )

export const getTotalTasksByCategories = () =>
  axios.get(`${API_URL}/task/total-tasks-by-categories`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  export const getStandardTaskByTotalTime = () =>
  axios.get(`${API_URL}/task/standard-time-task`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  export const getStandardTaskByWeek = () =>
  axios.get(`${API_URL}/task/standard-week-time-task`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })


  export const getStandardTaskByMonth = () =>
  axios.get(`${API_URL}/task/standard-month-time-task`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

