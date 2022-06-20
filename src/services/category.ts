import axios from 'axios'

import { API_URL } from 'config/environment'
import { getToken } from 'utils/get-token'

import type { Category } from 'types/category'

export type UpdateCategory = {
  categoryId: Category['id']
  payload: Category
}

export const createCategory = (payload: Category) =>
  axios.post(`${API_URL}/category`, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const updateCategory = ({ categoryId, payload }: UpdateCategory) =>
  axios.post(`${API_URL}/category/${categoryId}`, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const deleteCategory = (categoryId: string) =>
  axios.delete(`${API_URL}/category/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

export const getCategories = () =>
  axios.get(`${API_URL}/category`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
