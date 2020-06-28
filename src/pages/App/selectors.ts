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


export default selectDomain;
