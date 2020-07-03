import { createRoutine } from 'redux-saga-routines';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, PayloadToast, I_InfoMySelf } from './types';
import { clearAll } from 'utils/lsStorage';

// The initial state of the App container
export const initialState: ContainerState = {
  loading: false,
  isLogged: false,
  isShowToast: false,
  durationToast: 2000,
  colorToast: 'success',
  messageToast: 'Thành công',
  headerToast: undefined,
  positionToast: 'bottom',
  translucentToast: false,
  infoMySelf: {}
};


export const GET_INFO_MYSELF = createRoutine("getInfoMySelf");


const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLoading: (state, action: PayloadAction<{ stateLoading: boolean }>) => {
      state.loading = action.payload.stateLoading;
    },
    changeIsLogged: (state, action: PayloadAction<{ stateLogged: boolean }>) => {
      state.isLogged = action.payload.stateLogged;
    },
    showToast: (state, action: PayloadAction<PayloadToast>) => {
      state.messageToast = action.payload.messageToast;
      state.durationToast = action.payload?.durationToast || initialState.durationToast;
      state.colorToast = action.payload?.colorToast || initialState.colorToast;
      state.positionToast = action.payload?.positionToast || initialState.positionToast;
      state.translucentToast = action.payload?.translucentToast || initialState.translucentToast;
      state.headerToast = action.payload?.headerToast || initialState.headerToast;
      state.isShowToast = true;
    },
    hiddenToast: (state) => {
      state.messageToast = initialState.messageToast;
      state.durationToast = initialState.durationToast
      state.colorToast = initialState.colorToast;
      state.positionToast = initialState.positionToast;
      state.translucentToast = initialState.translucentToast;
      state.headerToast = initialState.headerToast;
      state.isShowToast = false;
    },
    updateInfoMySelf: (state, action: PayloadAction<I_InfoMySelf>) => {
      state.infoMySelf = { ...state.infoMySelf, ...action.payload }
    },
    logout: (state) => {
      state.loading = initialState.loading;
      state.isLogged = initialState.isLogged;
      state.infoMySelf = initialState.infoMySelf;
      clearAll();
    }
  },
  extraReducers: {
    [GET_INFO_MYSELF.TRIGGER]: (state, action: PayloadAction<any>) => { },
    [GET_INFO_MYSELF.REQUEST]: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    [GET_INFO_MYSELF.SUCCESS]: (state, action: PayloadAction<{ info: I_InfoMySelf }>) => {
      state.infoMySelf = action.payload.info;
      state.loading = false;
    },
    [GET_INFO_MYSELF.FAILURE]: (state, action: PayloadAction<any>) => {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;