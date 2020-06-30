import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_ACTION } from "./slice";
import { $post } from "utils/axios";

export function* loginSagas({ payload }) {
  yield put(LOGIN_ACTION.request());
  try {
    const result = yield call($post, "/jwt-auth/v1/token", payload);
    if (result.data.statusCode === 200) {
      yield put(LOGIN_ACTION.success(result.data.data));
    } else yield put(LOGIN_ACTION.failure());
  } catch {
    yield put(LOGIN_ACTION.failure());
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_ACTION.TRIGGER, loginSagas);
}
