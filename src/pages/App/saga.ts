import { take, select, fork, put, call, takeLatest } from "redux-saga/effects";
import { LOGIN_ACTION } from "pages/Login/slice";
import { actions, GET_INFO_MYSELF } from "./slice";
import { $get } from "utils/axios";

export function* watchAndLog() {
  while (true) {
    const styleConsole =
      "background: yellow; font-weight: bold; color: #40a9ff8c;";
    const action = yield take("*");
    const state = yield select();
    if (action.type !== "@@router/LOCATION_CHANGE") {
      console.group(action.type);
      console.log("%cBefore State", styleConsole, state);
      console.info("%cDispatching", styleConsole, action);
      console.log("%cNext State", styleConsole, state);
      console.groupEnd();
    }
  }
}

function* watchIsLogged() {
  while (true) {
    yield take(LOGIN_ACTION.SUCCESS);
    yield put(actions.changeIsLogged({ stateLogged: true }));
  }
}

export function* getMeSaga() {
  yield put(GET_INFO_MYSELF.request());
  try {
    const response = yield call($get, "/wp/v2/user/me");
    yield put(GET_INFO_MYSELF.success({ info: response.data.data }));
  } catch {
    yield put(GET_INFO_MYSELF.failure());
  }
}

export function* appSaga() {
  if (process.env.NODE_ENV === "development") yield fork(watchAndLog);
  yield fork(watchIsLogged);
  yield takeLatest(GET_INFO_MYSELF.TRIGGER, getMeSaga);
}
