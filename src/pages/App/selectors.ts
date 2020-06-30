import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types";
import { initialState } from "./slice";

const selectDomain = (state: RootState) => state.app || initialState;

export const selectIsLoading = createSelector(
  [selectDomain],
  (appState) => appState.loading
);

export const selectIsLogged = createSelector(
  [selectDomain],
  (appState) => appState.isLogged
);

export const selectIsShowToast = createSelector(
  [selectDomain],
  (appState) => appState.isShowToast
);

export const selectDurationToast = createSelector(
  [selectDomain],
  (appState) => appState.durationToast
);

export const selectColorToast = createSelector(
  [selectDomain],
  (appState) => appState.colorToast
);

export const selectHeaderToast = createSelector(
  [selectDomain],
  (appState) => appState.headerToast
);

export const selectTranslucentToast = createSelector(
  [selectDomain],
  (appState) => appState.translucentToast
);

export const selectMessageToast = createSelector(
  [selectDomain],
  (appState) => appState.messageToast
);

export const selectPositionToast = createSelector(
  [selectDomain],
  (appState) => appState.positionToast
);

export const selectInfoMySelf = createSelector(
  [selectDomain],
  (appState) => appState.infoMySelf
);

export default selectDomain;
