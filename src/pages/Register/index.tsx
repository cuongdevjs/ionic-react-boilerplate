/**
 *
 * Register
 *
 */

import React, { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, REGISTER_ACTION } from "./slice";
import { selectLoading } from "./selectors";
import { registerSaga } from "./saga";
import { IonPage } from "@ionic/react";
import { Header } from "pages/Login/components";

import bgUrl from "assets/images/bgLogin.png";
import { Main, Footer } from "./components";

interface Props {}

export const Register = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registerSaga });

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [_name, setName] = useState("");
  const [_email, setEmail] = useState("");
  const [_username, setUserName] = useState("");
  const [_password, setPassword] = useState("");

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log(_email, _password);
      dispatch(
        REGISTER_ACTION({
          name: _name,
          email: _email,
          username: _username,
          password: _password,
        })
      );
    },
    [_email, _name, _password, _username, dispatch]
  );

  const onChangeEmail = React.useCallback((e) => setEmail(e.target.value), []);

  const onChangeUsername = React.useCallback(
    (e) => setUserName(e.target.value),
    []
  );

  const onChangeName = React.useCallback((e) => setName(e.target.value), []);

  const onChangePassword = React.useCallback(
    (e) => setPassword(e.target.value),
    []
  );

  return (
    <IonPage>
      <Header bgUrl={bgUrl} height={"35vh"} />
      <Main
        loading={loading}
        name={_name}
        username={_username}
        email={_email}
        password={_password}
        onChangeUsername={onChangeUsername}
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onSubmit={onSubmit}
      />
      <Footer />
    </IonPage>
  );
});
