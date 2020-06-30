/**
 *
 * styled Login
 *
 */
import styled from "styled-components";
import { FlexRowCenter } from "global/styted";

export const BgHeader = styled.div<{ height?: string; bgUrl?: string }>`
  position: relative;
  background-image: url(${(props) => props.bgUrl && props.bgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: ${(props) => props.height || "500px"};
`;

export const BgHeaderOverlay = styled.div<{ bgColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.bgColor || "rgba(0, 0, 0, 0.34607359766960144)"};
`;

export const LoginMain = styled.div`
  height: 100%;
`;

export const LoginForm = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.02);
  min-height: 60vh;
  height: auto;
  margin: 0 10%;
  padding: 24px;
  position: absolute;
  width: calc(100% - 20%);
  top: 15vh;
  z-index: 11;
  border-radius: 18px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #36b5ad;
  }
  form {
    width: 100%;
    height: 100%;
  }
`;

export const LoginFormHeader = styled.h2`
  color: #454545;
  font-weight: 800;
  margin-bottom: 48px;
`;

export const LoginFormContent = styled.div`
  ion-input {
    --background: #f4f4f4;
    --padding-top: 17px;
    --padding-end: 12px;
    --padding-start: 12px;
    --padding-bottom: 17px;
    --placeholder-color: #404040;
    --color: #404040;
    font-size: 14px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
`;

export const LoginFormAction = styled.div`
  margin-top: 24px;
  ion-grid {
    --ion-grid-padding: 0;
  }
  ion-col {
    --ion-grid-column-padding: 0;
  }
`;

export const LoginFormBtnSubmit = styled.div`
  .btnSubmit {
    ${FlexRowCenter};
    background: rgb(54, 181, 173);
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    height: 3.2em;
    width: 100%;
  }
`;

export const LoginFormBtnDivident = styled.div`
  text-align: center;
  margin: 24px 0;
  color: #abb4bd;
  font-size: 13px;
  letter-spacing: 0.28px;
`;

export const LoginActionOption = styled.div`
  height: 100%;
  ${FlexRowCenter};
  justify-content: unset;
  display: inline-flex;
  font-weight: 600;
  .icon {
    background-color: #2ec4b6;
    width: 25px;
    height: 25px;
    color: #fff;
    ${FlexRowCenter};
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export const LoginFooter = styled.div`
  padding: 12px calc(10% - 6px);
  color: #8d8d8d;
`;
