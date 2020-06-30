/**
 *
 * styled MenuSide
 *
 */
import styled from "styled-components";
import { FlexRowCenter, FlexRowStart } from "global/styted";

export const MenuSideWrapper = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  ion-menu {
    --width: 70%;
    --max-width: 400px;
  }
`;

export const MenuHeader = styled.div`
  padding-top: 24px;
  ion-label {
    font-size: 14px !important;
    --color: #979797 !important;
  }
  ion-button.btnTargetLogin {
    --background: rgba(54, 181, 173, 0.2);
    --background-activated: rgba(54, 181, 173, 0.2);
    --background-focused: rgba(54, 181, 173, 0.2);
    --background-hover: rgba(54, 181, 173, 0.2);
    --border-radius: 5px;
    --color: #36b5ad;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .logged {
    font-size: 12px;
    .username {
      font-size: 16px;
      font-weight: 600;
      color: #121212;
    }
    .mail {
      color: #b6b6b6;
      margin: 5px 0;
    }
    .linkTargetProfile {
      ${FlexRowStart}
      font-size: 13px;
      color: #36b5ad;
      span {
        margin-left: 3px;
      }
    }
  }
`;

export const MenuHeaderAvatar = styled.div`
  ion-avatar {
    width: 64px;
    height: 64px;
    background-color: #e4e6ea;
    border: 3px solid #ffffff;
    border-radius: 100%;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.17),
      inset 0 1px 10px 0 rgba(0, 0, 0, 0.25);
  }
`;

export const MenuContent = styled.div`
  height: 100%;
  padding-top: 32px;
  padding-right: 20px;
  ion-content {
    --padding-top: 32px;
    --padding-end: 20px;
  }
`;

export const MenuContentItem = styled.div`
  margin-bottom: 4px;
  ion-item {
    font-size: 14px;
    font-weight: 500;
    --color: #292929;
  }
`;

export const MenuContentItemIcon = styled.div`
  ${FlexRowCenter}
  background-color: #E4E6EA;
  border-radius: 100%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  margin-right: 17px;
`;

export const MenuFooter = styled.div`
  height: 100%;
  font-size: 13px;
`;

export const MenuFooterLogout = styled.div`
  padding: 10px 20px;
  ion-button.btnTargetLogout {
    --background: rgba(250, 100, 0, 0.2);
    --background-activated: rgba(250, 100, 0, 0.2);
    --background-focused: rgba(250, 100, 0, 0.2);
    --background-hover: rgba(250, 100, 0, 0.2);
    --border-radius: 5px;
    --color: #fa6400;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const MenuFooterLicense = styled.div`
  background-color: #35b2aa;
  color: #fff;
  padding: 15px 20px;
`;
