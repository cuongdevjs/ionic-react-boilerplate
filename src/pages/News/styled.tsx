/**
 *
 * styled News
 *
 */
import styled from "styled-components";
import { FlexRowStart } from "global/styted";

export const NewsHeader = styled.div`
  ion-toolbar {
    --padding-start: 16px;
    --padding-end: 16px;
    ion-title {
      font-size: 15px;
      color: #4c4c4c;
    }
    ion-menu-button {
      color: #bbb;
      font-size: 21px;
      --padding-start: 0;
      --padding-end: 0;
      height: 21px;
      width: 21px;
    }
    ion-buttons {
      ion-icon {
        color: #bbb;
        font-size: 17px;
      }
    }
  }
`;

export const NewsContent = styled.div`
  width: 100%;
  padding: 12px 20px 24px;
`;

export const NewsHighlight = styled.div`
  ion-card {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
    &-header {
      padding-bottom: 12px;
      padding-top: 12px;
    }
    &-title {
      color: rgb(44, 44, 44);
      line-height: 22px;
      font-size: 16px;
    }
    &-content {
      color: #1d1d1f;
      font-size: 13px;
      line-height: 20px;
      padding-bottom: 12px;
    }
    .time {
      ${FlexRowStart};
      font-size: 12px;
      padding-bottom: 20px;
      padding-left: 20px;
      color: #878787;
    }
  }
`;

export const NewsList = styled.div`
  padding-bottom: 20px;
`;
