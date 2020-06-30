/**
 *
 * styled LoginSocialGroups
 *
 */
import styled from "styled-components";

export const LoginSocialGroupsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BtnGroups = styled.div`
  &.facebook,
  &.google {
    ion-button {
      --border-radius: 4px;
      border-radius: 4px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.22);
    }
  }
  &.facebook {
    margin-right: 8px;
    ion-button {
      --background: #4267b2;
    }
    ion-icon {
      color: #fff;
      width: 26px;
      height: 26px;
    }
  }
  &.google {
    margin-left: 8px;
    ion-button {
      --background: #fff;
    }
  }
`;
