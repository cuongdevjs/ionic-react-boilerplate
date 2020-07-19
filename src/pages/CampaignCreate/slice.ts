import { createRoutine } from "redux-saga-routines";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState, I_FormCreatCampaign } from "./types";

// The initial state of the CampaignCreate container
export const initialState: ContainerState = {
	loading: false,
	success: false,
	error: false,
};

export const CREATE_CAMPAIGN_ACTION = createRoutine(
	"CampaignCreate/createCampaign"
);

const campaignCreateSlice = createSlice({
	name: "campaignCreate",
	initialState,
	reducers: {
		resetStatusPage(state) {
			state.loading = initialState.loading;
			state.success = initialState.success;
			state.error = initialState.error;
		},
	},
	extraReducers: {
		[CREATE_CAMPAIGN_ACTION.TRIGGER]: (
			state,
			action: PayloadAction<I_FormCreatCampaign>
		) => {},
		[CREATE_CAMPAIGN_ACTION.REQUEST]: (state) => {
			state.error = false;
			state.success = false;
			state.loading = true;
		},
		[CREATE_CAMPAIGN_ACTION.SUCCESS]: (state) => {
			state.error = false;
			state.success = true;
			state.loading = false;
		},
		[CREATE_CAMPAIGN_ACTION.FAILURE]: (state) => {
			state.error = true;
			state.success = false;
			state.loading = false;
		},
	},
});

export const { actions, reducer, name: sliceKey } = campaignCreateSlice;
