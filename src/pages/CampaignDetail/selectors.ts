import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.campaignDetail || initialState;

export const selectCampaignDetail = createSelector(
	[selectDomain],
	(campaignDetailState) => campaignDetailState
);

export const selectDetailCampaign = createSelector(
	[selectDomain],
	(newsState) => newsState.dataCampaign
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
