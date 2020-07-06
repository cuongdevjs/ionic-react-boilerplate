/**
 *
 * styled NewsDetail
 *
 */
import styled from "styled-components";
import { FlexRowStart } from "global/styted";

export const NewsDetailHeader = styled.div`
  ion-toolbar {
    --padding-start: 16px;
    --padding-end: 16px;
    ion-title {
      font-size: 15px;
      color: #4c4c4c;
    }
    ion-back-button {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const NewsDetailBg = styled.div``;

export const NewsDetailTime = styled.div`
  ${FlexRowStart};
  font-size: 12px;
  padding: 12px 20px;
  color: #878787;
`;

export const NewsDetailTitle = styled.h3`
  color: rgb(44, 44, 44);
  line-height: 22px;
  font-size: 16px;
  padding: 0 20px;
  font-weight: 600;
  text-align: left;
  margin-top: 0;
`;

export const NewsDetailContent = styled.div`
  padding: 0 20px;
  padding-bottom: 24px;
`;
