import { RootState } from '../../store';

export const userTokenSelector = (state: RootState) => state.auth.token;
