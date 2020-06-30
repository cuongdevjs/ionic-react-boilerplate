import { createRoutine } from "redux-saga-routines";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState, payloadRequestLogin } from "./types";
import { setItem } from "utils/lsStorage";

// The initial state of the Login container
export const initialState: ContainerState = {
  error: false,
  loading: false,
  success: false,
};

export const LOGIN_ACTION = createRoutine("loginAction");

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [LOGIN_ACTION.TRIGGER]: (
      state,
      action: PayloadAction<payloadRequestLogin>
    ) => {},
    [LOGIN_ACTION.REQUEST]: (state, action: PayloadAction<any>) => {
      state.error = false;
      state.success = false;
      state.loading = true;
    },
    [LOGIN_ACTION.SUCCESS]: (state, action: PayloadAction<any>) => {
      setItem("yoolove-token", action.payload.token);
      state.error = false;
      state.success = true;
      state.loading = false;
    },
    [LOGIN_ACTION.FAILURE]: (state, action: PayloadAction<any>) => {
      state.error = true;
      state.success = false;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
