import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.news || initialState;

export const selectNews = createSelector(
	[selectDomain],
	(newsState) => newsState
);

export const selectListNews = createSelector(
	[selectDomain],
	(newsState) => newsState.listNews
);

export const selectDetailNews = createSelector(
	[selectDomain],
	(newsState) => newsState.detailNewsSelected
);

export const selectIsFetchInfinityDone = createSelector(
	[selectDomain],
	(newsState) => newsState.isFetchInfinityDone
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
