import { createRoutine } from "redux-saga-routines";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState, I_DetailCampaign } from "./types";

// The initial state of the CampaignDetail container
export const initialState: ContainerState = {
	loading: false,
	success: false,
	error: false,
	dataCampaign: {},
};

export const GET_DETAIL_CAMPAIGN = createRoutine("getDetailCampaign");

const campaignDetailSlice = createSlice({
	name: "campaignDetail",
	initialState,
	reducers: {
		resetStatusPage(state) {
			state.loading = initialState.loading;
			state.error = initialState.error;
			state.success = initialState.success;
		},
		resetData(state) {
			state.dataCampaign = initialState.dataCampaign;
		},
	},
	extraReducers: {
		[GET_DETAIL_CAMPAIGN.TRIGGER]: (
			state,
			action: PayloadAction<{ id: string }>
		) => {},
		[GET_DETAIL_CAMPAIGN.REQUEST]: (state) => {
			state.error = false;
			state.success = false;
			state.loading = true;
		},
		[GET_DETAIL_CAMPAIGN.SUCCESS]: (
			state,
			action: PayloadAction<I_DetailCampaign>
		) => {
			state.dataCampaign = action.payload;
			state.error = false;
			state.loading = false;
			state.success = true;
		},
		[GET_DETAIL_CAMPAIGN.FAILURE]: (state) => {
			state.error = true;
			state.success = false;
			state.loading = false;
		},
	},
});

export const { actions, reducer, name: sliceKey } = campaignDetailSlice;
