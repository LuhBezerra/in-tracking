import { RootState } from '../../store'

export const isAuthLoadingSelector = (state: RootState) => state.auth.status === 'loading'

export const hasAuthErrorSelector = (state: RootState) => state.auth.status === 'failed'