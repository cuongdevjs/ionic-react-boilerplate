/**
 *
 * Login
 *
 */

import React, { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, LOGIN_ACTION } from "./slice";
import { loginSaga } from "./saga";
import { IonPage } from "@ionic/react";
import { selectLoading } from "./selectors";
import { Header, Footer, Main } from "./components";

import bgUrl from "assets/images/bgRegister.png";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = memo(({ history }) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");

  const onSubmit = React.useCallback(
    (e) => {
      dispatch(LOGIN_ACTION({ username: _email, password: _password }));
      e.preventDefault();
    },
    [_email, _password, dispatch]
  );

  const onChangeEmail = React.useCallback((e) => setEmail(e.target.value), []);

  const onChangePassword = React.useCallback(
    (e) => setPassword(e.target.value),
    []
  );

  const onGoRegisterPage = React.useCallback(() => history.push("/register"), [
    history,
  ]);

  return (
    <IonPage>
      <Header bgUrl={bgUrl} />
      <Main
        loading={loading}
        email={_email}
        password={_password}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onSubmit={onSubmit}
      />
      <Footer onGoRegisterPage={onGoRegisterPage} />
    </IonPage>
  );
});
