import { call, put, takeLatest } from "redux-saga/effects";
import { $post } from "utils/axios";
import { UPDATE_INFO_MY_SELF_ACTION } from "./slice";
import { actions as ActionApp } from "pages/App/slice";

export function* updateInfoMySelfSagas({ payload }) {
  yield put(UPDATE_INFO_MY_SELF_ACTION.request());
  try {
    const formData = yield new FormData();
    yield Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const result = yield call($post, "/wp/v2/user/me", formData);
    yield put(UPDATE_INFO_MY_SELF_ACTION.success());
    yield put(ActionApp.updateInfoMySelf(result.data.data));
  } catch {
    yield put(UPDATE_INFO_MY_SELF_ACTION.failure());
  }
}

export function* profileSaga() {
  yield takeLatest(UPDATE_INFO_MY_SELF_ACTION.TRIGGER, updateInfoMySelfSagas);
}
