import { take, select, fork } from 'redux-saga/effects';

export function* watchAndLog() {
  while (true) {
    const styleConsole =
      'background: yellow; font-weight: bold; color: #40a9ff8c;';
    const action = yield take('*');
    const state = yield select();
    if (action.type !== '@@router/LOCATION_CHANGE') {
      console.group(action.type);
      console.log('%cBefore State', styleConsole, state);
      console.info('%cDispatching', styleConsole, action);
      console.log('%cNext State', styleConsole, state);
      console.groupEnd();
    }
  }
}


// function* watchIsLogged() {
//   while (true) {
//     yield take(loginAction.SUCCESS);
//     yield put(actions.changeIsLogged(true));
//   }
// }

// export function* getMeSaga() {
//   try {
//     const response = yield call($get, '/getMe');
//     yield put(getMe.success(response.data));
//   } catch {
//     yield put(getMe.failure());
//   }
// }

export function* appSaga() {
  if (process.env.NODE_ENV === 'development') yield fork(watchAndLog);
  // yield fork(watchIsLogged);
  // yield takeLatest(getMe.TRIGGER, getMeSaga);
}