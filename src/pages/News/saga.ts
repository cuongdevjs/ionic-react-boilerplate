import { put, call, takeLatest } from "redux-saga/effects";
import { GET_LIST_NEWS_ACTION, actions, GET_DETAIL_NEWS_ACTION } from "./slice";
import { $get } from "utils/axios";

export function* getListNewsSagas({ payload }) {
	yield put(GET_LIST_NEWS_ACTION.request());
	try {
		const result = yield call($get, "/wp/v2/posts", payload);
		if (!result.data.length || result.data.length < payload.per_page)
			yield put(actions.setIsFetchInfinityDone({ isDone: true }));
		yield put(GET_LIST_NEWS_ACTION.success(result.data));
	} catch {
		yield put(GET_LIST_NEWS_ACTION.failure());
	}
}

export function* getDetailNewsSagas({ payload }) {
	yield put(GET_DETAIL_NEWS_ACTION.request());
	try {
		const result = yield call($get, `/wp/v2/posts/${payload.id}`);
		yield put(GET_DETAIL_NEWS_ACTION.success(result.data));
	} catch {
		yield put(GET_DETAIL_NEWS_ACTION.failure());
	}
}

export function* newsSaga() {
	yield takeLatest(GET_LIST_NEWS_ACTION.TRIGGER, getListNewsSagas);
	yield takeLatest(GET_DETAIL_NEWS_ACTION.TRIGGER, getDetailNewsSagas);
}
