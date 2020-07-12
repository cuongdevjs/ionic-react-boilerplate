import { put, call, takeLatest } from "redux-saga/effects";
import { GET_LIST_CAMPAIGN_ACTION } from "./slice";
import { $get } from "utils/axios";

export function* getListNewsSagas({ payload }) {
  yield put(GET_LIST_CAMPAIGN_ACTION.request());
  try {
    const result = yield call($get, "/yoolove/v1/campaigns", payload);
    yield put(GET_LIST_CAMPAIGN_ACTION.success(result.data));
  } catch {
    yield put(GET_LIST_CAMPAIGN_ACTION.failure());
  }
}


export function* campaignSaga() {
  yield takeLatest(GET_LIST_CAMPAIGN_ACTION.TRIGGER, getListNewsSagas);
}