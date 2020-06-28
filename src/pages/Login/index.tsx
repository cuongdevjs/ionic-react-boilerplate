/**
 *
 * Login
 *
 */

import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey } from "./slice";
import { selectLogin } from "./selectors";
import { loginSaga } from "./saga";
import { LoginWrapper } from "./styled";
import { IonPage, IonFabButton } from "@ionic/react";

interface Props {}

export const Login = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <IonPage>
      <LoginWrapper>
        <span>login</span>
        <IonFabButton color="primary">Primary</IonFabButton>
      </LoginWrapper>
    </IonPage>
  );
});
