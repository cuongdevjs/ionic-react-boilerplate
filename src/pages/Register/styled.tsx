/**
 *
 * styled Register
 *
 */

import styled from "styled-components";
import {
  LoginMain,
  LoginForm,
  LoginFormHeader,
  LoginFormContent,
  LoginFormAction,
  LoginFormBtnSubmit,
  LoginFormBtnDivident,
  LoginActionOption,
  LoginFooter,
} from "pages/Login/styled";

export const RegisterMain = styled(LoginMain)``;

export const RegisterForm = styled(LoginForm)`
  top: 10vh;
  &::before {
    background-color: #f6b327;
  }
`;

export const RegisterFormHeader = styled(LoginFormHeader)`
  margin-bottom: 32px;
`;

export const RegisterFormContent = styled(LoginFormContent)``;

export const RegisterFormAction = styled(LoginFormAction)``;

export const RegisterFormBtnSubmit = styled(LoginFormBtnSubmit)`
  .btnSubmit {
    background: #f6b327;
  }
`;

export const RegisterFormBtnDivident = styled(LoginFormBtnDivident)``;

export const RegisterActionOption = styled(LoginActionOption)``;

export const RegisterFooter = styled(LoginFooter)`
  padding-top: 24px;
  padding-bottom: 24px;
`;
