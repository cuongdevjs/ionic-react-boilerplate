import { call, put, takeLatest } from "redux-saga/effects";
import { GET_DETAIL_CAMPAIGN } from "./slice";
import { $get } from "utils/axios";

export function* getDetailCampaignSagas({ payload }) {
	yield put(GET_DETAIL_CAMPAIGN.request());
	try {
		const result = yield call($get, `/yoolove/v1/campaigns/${payload.id}`);
		yield put(GET_DETAIL_CAMPAIGN.success(result.data));
	} catch {
		yield put(GET_DETAIL_CAMPAIGN.failure());
	}
}

export function* campaignDetailSaga() {
	yield takeLatest(GET_DETAIL_CAMPAIGN.TRIGGER, getDetailCampaignSagas);
}
