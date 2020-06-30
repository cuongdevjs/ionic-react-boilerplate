import React, { FormEvent } from "react";
import {
  LoginForm,
  LoginFormHeader,
  LoginFormContent,
  LoginFormAction,
  LoginFormBtnSubmit,
  LoginFormBtnDivident,
  LoginMain,
} from "../styled";
import { IonGrid, IonRow, IonCol, IonInput, IonSpinner } from "@ionic/react";
import LoginSocialGroups from "components/LoginSocialGroups/Loadable";

interface Props {
  email: string;
  password: string;
  onChangeEmail: (e: FormEvent<HTMLIonInputElement>) => void;
  onChangePassword: (e: FormEvent<HTMLIonInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export const Main = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  loading,
}: Props) => {
  return (
    <LoginMain>
      <LoginForm>
        <form onSubmit={onSubmit}>
          <LoginFormHeader>Đăng nhập</LoginFormHeader>
          <LoginFormContent>
            <IonInput
              value={email}
              onInput={onChangeEmail}
              required
              placeholder="Username"
            />
            <IonInput
              value={password}
              onInput={onChangePassword}
              required
              type="password"
              placeholder="Mật khẩu"
            />
          </LoginFormContent>
          <LoginFormAction>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <LoginFormBtnSubmit>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btnSubmit"
                    >
                      {loading && <IonSpinner name="lines-small" />}
                      &nbsp;Đăng nhập
                    </button>
                  </LoginFormBtnSubmit>
                </IonCol>
              </IonRow>
            </IonGrid>
            <LoginFormBtnDivident>- Hoặc -</LoginFormBtnDivident>
            <LoginSocialGroups />
          </LoginFormAction>
        </form>
      </LoginForm>
    </LoginMain>
  );
};
