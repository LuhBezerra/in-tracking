import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

import type { RootState } from '../../store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
