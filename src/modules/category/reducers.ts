import { createSlice } from '@reduxjs/toolkit'

import { Status } from 'types/redux'
import { getStateStatus } from 'utils/status-state'
import { Category } from 'types/category'

import { createCategory, deleteCategory, getCategories, updateCategory } from './actions'

type State = {
  categories: Category [],
  status: Status
}

const initialState: State = {
  categories: [],
  status: 'idle',
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createCategory.fulfilled, (state, action) => {
        state.status = 'idle'
        state.categories.push(action.payload) 
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const payload = action.payload

        state.status = 'idle'
        state.categories = state.categories.filter(category => category.id !== payload.id)
        state.categories.push(payload)
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = 'idle'
        state.categories = state.categories.filter(category => category.id !== action.payload.categoryId)
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'idle'
        state.categories = action.payload 
      })
    getStateStatus(builder, createCategory)
    getStateStatus(builder, updateCategory)
    getStateStatus(builder, deleteCategory)
    getStateStatus(builder, getCategories)
  },
})

export const category = categorySlice.reducer
