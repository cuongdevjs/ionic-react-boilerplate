import { createRoutine } from "redux-saga-routines";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState, I_Campaign, payloadGetList } from "./types";

// The initial state of the Campaign container
export const initialState: ContainerState = {
	loading: false,
	success: false,
	error: false,
	listCampaign: [],
};

export const GET_LIST_CAMPAIGN_ACTION = createRoutine("getListCampaign");

const campaignSlice = createSlice({
	name: "campaign",
	initialState,
	reducers: {
		resetStatusPage(state) {
			state.loading = initialState.loading;
			state.success = initialState.success;
			state.error = initialState.error;
		},
		resetListCampaign(state) {
			state.listCampaign = initialState.listCampaign;
		},
	},
	extraReducers: {
		[GET_LIST_CAMPAIGN_ACTION.TRIGGER]: (
			state,
			action: PayloadAction<payloadGetList>
		) => {},
		[GET_LIST_CAMPAIGN_ACTION.REQUEST]: (state, action: PayloadAction<any>) => {
			state.error = false;
			state.success = false;
			state.loading = true;
		},
		[GET_LIST_CAMPAIGN_ACTION.SUCCESS]: (
			state,
			action: PayloadAction<I_Campaign[]>
		) => {
			state.listCampaign = [...action.payload];
			state.error = false;
			state.success = true;
			state.loading = false;
		},
		[GET_LIST_CAMPAIGN_ACTION.FAILURE]: (state, action: PayloadAction<any>) => {
			state.error = true;
			state.success = false;
			state.loading = false;
		},
	},
});

export const { actions, reducer, name: sliceKey } = campaignSlice;
