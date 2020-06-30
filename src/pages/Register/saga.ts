import { call, put, takeLatest } from "redux-saga/effects";
import { REGISTER_ACTION } from "./slice";
import { $post } from "utils/axios";

export function* registerSagas({ payload }) {
  yield put(REGISTER_ACTION.request());
  try {
    const result = yield call($post, "/wp/v2/users/register", payload);
    console.log(result);
    if (result.data.statusCode === 200) {
      yield put(REGISTER_ACTION.success());
    } else yield put(REGISTER_ACTION.failure());
  } catch {
    yield put(REGISTER_ACTION.failure());
  }
}

export function* registerSaga() {
  yield takeLatest(REGISTER_ACTION.TRIGGER, registerSagas);
}
