import React, { FormEvent } from "react";
import {
  RegisterForm,
  RegisterFormHeader,
  RegisterFormContent,
  RegisterFormAction,
  RegisterFormBtnSubmit,
  RegisterFormBtnDivident,
  RegisterMain,
} from "../styled";
import { IonGrid, IonRow, IonCol, IonInput, IonSpinner } from "@ionic/react";
import LoginSocialGroups from "components/LoginSocialGroups/Loadable";

interface Props {
  name: string;
  username: string;
  email: string;
  password: string;
  onChangeUsername: (e: FormEvent<HTMLIonInputElement>) => void;
  onChangeName: (e: FormEvent<HTMLIonInputElement>) => void;
  onChangeEmail: (e: FormEvent<HTMLIonInputElement>) => void;
  onChangePassword: (e: FormEvent<HTMLIonInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export const Main = (props: Props) => {
  return (
    <RegisterMain>
      <RegisterForm>
        <form onSubmit={props.onSubmit}>
          <RegisterFormHeader>Đăng ký</RegisterFormHeader>
          <RegisterFormContent>
            <IonInput
              value={props.email}
              onInput={props.onChangeEmail}
              required
              type="email"
              placeholder="Email"
              clearInput
            />
            <IonInput
              value={props.username}
              onInput={props.onChangeUsername}
              required
              placeholder="Username"
              clearInput
            />
            <IonInput
              value={props.name}
              onInput={props.onChangeName}
              required
              placeholder="Họ tên"
              clearInput
            />
            <IonInput
              value={props.password}
              onInput={props.onChangePassword}
              required
              type="password"
              placeholder="Mật khẩu"
              clearInput
            />
          </RegisterFormContent>
          <RegisterFormAction>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <RegisterFormBtnSubmit>
                    <button type="submit" className="btnSubmit">
                      {props.loading && <IonSpinner name="lines-small" />}
                      &nbsp;Đăng ký
                    </button>
                  </RegisterFormBtnSubmit>
                </IonCol>
              </IonRow>
            </IonGrid>
            <RegisterFormBtnDivident>- Hoặc -</RegisterFormBtnDivident>
            <LoginSocialGroups />
          </RegisterFormAction>
        </form>
      </RegisterForm>
    </RegisterMain>
  );
};
