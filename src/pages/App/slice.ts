// import { createRoutine } from 'redux-saga-routines';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  loading: false,
  isLogged: false,
};


const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLoading: (state, action: PayloadAction<{stateLoading: boolean}> ) => {
      state.loading = action.payload.stateLoading;
    },
    changeIsLogged: (state, action: PayloadAction<{stateLogged: boolean}>) => {
      state.isLogged = action.payload.stateLogged;
    }
  },
  // extraReducers: {
  // },
});

export const { actions, reducer, name: sliceKey } = appSlice;