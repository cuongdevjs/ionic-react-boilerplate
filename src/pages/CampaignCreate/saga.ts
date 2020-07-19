import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_CAMPAIGN_ACTION } from "./slice";
import { $post } from "utils/axios";
import { actions as actionsApp } from "pages/App/slice";

export function* createCampaignSagas({ payload }) {
	yield put(CREATE_CAMPAIGN_ACTION.request());
	try {
		yield call($post, `/yoolove/v1/campaigns/create`, {
			payload,
		});
		yield put(
			actionsApp.showToast({
				messageToast: "Tạo chiến dịch thành công",
				colorToast: "success",
			})
		);
		yield put(CREATE_CAMPAIGN_ACTION.success());
	} catch {
		yield put(CREATE_CAMPAIGN_ACTION.failure());
	}
}

export function* campaignCreateSaga() {
	yield takeLatest(CREATE_CAMPAIGN_ACTION.TRIGGER, createCampaignSagas);
}
