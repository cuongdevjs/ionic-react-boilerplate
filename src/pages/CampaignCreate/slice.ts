import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the CampaignCreate container
export const initialState: ContainerState = {};

const campaignCreateSlice = createSlice({
  name: 'campaignCreate',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = campaignCreateSlice;