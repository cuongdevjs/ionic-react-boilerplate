import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.campaignCreate || initialState;

export const selectCampaignCreate = createSelector(
	[selectDomain],
	(campaignCreateState) => campaignCreateState
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
