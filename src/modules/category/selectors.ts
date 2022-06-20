import { RootState } from '../../store'

export const categoriesSelector = (state: RootState) => state.category.categories

export const isCategoryLoadingSelector = (state: RootState) => state.category.status === 'loading'

export const hasCategoryErrorSelector = (state: RootState) => state.category.status === 'failed'
