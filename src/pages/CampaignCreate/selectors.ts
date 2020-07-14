import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.campaignCreate || initialState;

export const selectCampaignCreate = createSelector(
  [selectDomain],
  campaignCreateState => campaignCreateState,
);