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

export function* appSaga() {
  if (process.env.NODE_ENV === 'development') yield fork(watchAndLog);
}