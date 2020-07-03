import { createRoutine } from "redux-saga-routines";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState, payloadUpdateInfoMySelf } from "./types";

// The initial state of the Profile container
export const initialState: ContainerState = {
  loading: false,
  success: false,
  error: false,
};

export const UPDATE_INFO_MY_SELF_ACTION = createRoutine("updateInfoMySelf");

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [UPDATE_INFO_MY_SELF_ACTION.TRIGGER]: (
      state,
      action: PayloadAction<payloadUpdateInfoMySelf>
    ) => {},
    [UPDATE_INFO_MY_SELF_ACTION.REQUEST]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.error = false;
      state.success = false;
      state.loading = true;
    },
    [UPDATE_INFO_MY_SELF_ACTION.SUCCESS]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.error = false;
      state.success = true;
      state.loading = false;
    },
    [UPDATE_INFO_MY_SELF_ACTION.FAILURE]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.error = true;
      state.success = false;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = profileSlice;
