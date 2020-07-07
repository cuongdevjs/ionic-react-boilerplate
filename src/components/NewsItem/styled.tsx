/**
 *
 * styled NewsItem
 *
 */
import styled from "styled-components";
import { FlexRowStart, FlexColBetween } from "global/styted";

export const NewsItemWrapper = styled.div`
  ion-item {
    --background: rgba(0, 0, 0, 0);
    --pading-start: 0;
    --ion-safe-area-left: 0;
    margin-bottom: 12px;
    margin-top: 3px;
    ion-thumbnail {
      --border-radius: 11px;
    }
  }
  ion-label {
    ${FlexColBetween};
    margin-top: 0px;
    margin-bottom: 0px;
    .title {
      white-space: pre-wrap;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      color: rgb(29, 29, 31);
      font-size: 14px;
      font-weight: 600;
      line-height: 18.15px;
      margin-bottom: 8px;
    }
    .time {
      ${FlexRowStart};
      font-size: 12px;
      color: #878787;
    }
  }
`;
