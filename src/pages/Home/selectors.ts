import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.home || initialState;

export const selectHome = createSelector(
  [selectDomain],
  homeState => homeState,
);