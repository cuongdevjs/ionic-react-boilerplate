import { createRoutine } from "redux-saga-routines";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState, payloadRequestRegister } from "./types";

// The initial state of the Register container
export const initialState: ContainerState = {
  loading: false,
  error: false,
  success: false,
};

export const REGISTER_ACTION = createRoutine("registerAction");

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    [REGISTER_ACTION.TRIGGER]: (
      state,
      action: PayloadAction<payloadRequestRegister>
    ) => {},
    [REGISTER_ACTION.REQUEST]: (state, action: PayloadAction<any>) => {
      state.error = false;
      state.success = false;
      state.loading = true;
    },
    [REGISTER_ACTION.SUCCESS]: (state, action: PayloadAction<any>) => {
      state.error = false;
      state.success = true;
      state.loading = false;
    },
    [REGISTER_ACTION.FAILURE]: (state, action: PayloadAction<any>) => {
      state.error = true;
      state.success = false;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = registerSlice;
