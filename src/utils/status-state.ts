export const getStateStatus = (builder, action) =>
  builder
    .addCase(action.pending, state => (state.status = 'loading'))
    .addCase(action.rejected, state => (state.status = 'failed'))
