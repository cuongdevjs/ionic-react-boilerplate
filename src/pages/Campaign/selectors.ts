import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.campaign || initialState;

export const selectCampaign = createSelector(
  [selectDomain],
  campaignState => campaignState,
);


export const selectListCampaign = createSelector(
  [selectDomain],
  (newsState) => newsState.listCampaign
);

export const selectSuccess = createSelector(
  [selectDomain],
  (newsState) => newsState.success
);

export const selectLoading = createSelector(
  [selectDomain],
  (newsState) => newsState.loading
);

export const selectError = createSelector(
  [selectDomain],
  (newsState) => newsState.error
);
