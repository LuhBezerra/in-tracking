import { createAsyncThunk } from '@reduxjs/toolkit'
import * as servicesCategory from 'services/category'
import type { UpdateCategory } from 'services/category'

import type { Category } from 'types/category'

export const createCategory = createAsyncThunk('CREATE_CATEGORY', async (payload: Category) => {
  await servicesCategory.createCategory(payload)
  return payload
})

export const updateCategory = createAsyncThunk(
  'UPDATE_CATEGORY',
  async ({ categoryId, payload }: UpdateCategory) => {
    await servicesCategory.updateCategory({ categoryId, payload })
    return payload
  }
)

export const deleteCategory = createAsyncThunk('DELETE_CATEGORY', async (categoryId: string) => {
  await servicesCategory.deleteCategory(categoryId)
  return { categoryId }
})

export const getCategories = createAsyncThunk('GET_CATEGORY', async () => {
  const response = await servicesCategory.getCategories()
  return response.data
})
