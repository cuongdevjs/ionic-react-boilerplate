import { createRoutine } from "redux-saga-routines";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "utils/@reduxjs/toolkit";
import { ContainerState, I_News, payloadGetList } from "./types";

// The initial state of the News container
export const initialState: ContainerState = {
	loading: false,
	success: false,
	error: false,
	listNews: [],
	detailNewsSelected: {
		id: "",
	},
	isFetchInfinityDone: false,
};

export const GET_LIST_NEWS_ACTION = createRoutine("getListNews");
export const GET_DETAIL_NEWS_ACTION = createRoutine("getDetailNews");

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		setIsFetchInfinityDone(state, action: PayloadAction<{ isDone: boolean }>) {
			state.isFetchInfinityDone = action.payload.isDone;
		},
		resetStatusPage(state) {
			state.loading = initialState.loading;
			state.success = initialState.success;
			state.error = initialState.error;
		},
		resetListNews(state) {
			state.listNews = initialState.listNews;
			state.detailNewsSelected = initialState.detailNewsSelected;
			state.isFetchInfinityDone = initialState.isFetchInfinityDone;
		},
	},
	extraReducers: {
		[GET_LIST_NEWS_ACTION.TRIGGER]: (
			state,
			action: PayloadAction<payloadGetList>
		) => {},
		[GET_LIST_NEWS_ACTION.REQUEST]: (state) => {
			state.error = false;
			state.success = false;
			state.loading = true;
		},
		[GET_LIST_NEWS_ACTION.SUCCESS]: (
			state,
			action: PayloadAction<I_News[]>
		) => {
			state.listNews = Array.from(
				new Set(
					[...state.listNews, ...action.payload].map((item) =>
						JSON.stringify(item)
					)
				)
			).map((item) => JSON.parse(item));
			state.error = false;
			state.success = true;
			state.loading = false;
		},
		[GET_LIST_NEWS_ACTION.FAILURE]: (state) => {
			state.error = true;
			state.success = false;
			state.loading = false;
		},
		// get detail news
		[GET_DETAIL_NEWS_ACTION.TRIGGER]: (
			state,
			action: PayloadAction<{ id: string }>
		) => {},
		[GET_DETAIL_NEWS_ACTION.REQUEST]: (state) => {
			state.error = false;
			state.success = false;
			state.loading = true;
		},
		[GET_DETAIL_NEWS_ACTION.SUCCESS]: (
			state,
			action: PayloadAction<I_News>
		) => {
			state.detailNewsSelected = action.payload;
			state.error = false;
			state.success = true;
			state.loading = false;
		},
		[GET_DETAIL_NEWS_ACTION.FAILURE]: (state) => {
			state.error = true;
			state.success = false;
			state.loading = false;
		},
	},
});

export const { actions, reducer, name: sliceKey } = newsSlice;
