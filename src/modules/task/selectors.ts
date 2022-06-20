import { RootState } from '../../store'

export const tasksSelector = (state: RootState) => state.task.tasks

export const taskByIdSelector = (state: RootState, id: string) =>
  state.task.tasks.find(task => task.id === id)

export const totalTasksByCategoriesSelector = (state: RootState) => state.task.reports.totalTasksByCategories

export const totalRegisteredTasksSelector = (state: RootState) => state.task.reports.totalRegistered

export const totalPunctualSelector = (state: RootState) => state.task.reports.totalPunctual

export const totalOverdueSelector = (state: RootState) => state.task.reports.totalOverdue

export const totalPendingSelector = (state: RootState) => state.task.reports.totalPending

export const standardTaskByMonthSelector = (state: RootState) => state.task.reports.standardTaskByMonth

export const standardTaskByTotalTimeSelector = (state: RootState) => state.task.reports.standardTaskByTotalTime

export const standardTaskByWeekSelector = (state: RootState) => state.task.reports.standardTaskByWeek

export const isTaskLoadingSelector = (state: RootState) => state.task.status === 'loading'

export const hasTaskErrorSelector = (state: RootState) => state.task.status === 'failed'
