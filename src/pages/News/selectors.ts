import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.news || initialState;

export const selectNews = createSelector(
  [selectDomain],
  newsState => newsState,
);