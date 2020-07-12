/**
 *
 * styled CampaignHighlight
 *
 */
import styled from 'styled-components'
import { FlexRowBetween } from 'global/styted'

export const CampaignHighlightWrapper = styled.div`
  width: 100%;
  ion-card {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
    width: 100%;
    .bg {
      position: relative;
      border-radius: 9px;
      overflow: hidden;
      margin: 12px;
      margin-bottom: 0;
      width: 100%;
      max-height: 250px;
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(2, 2, 2, 0.65));
      }
      .text {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        white-space: pre-wrap;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        z-index: 2;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 15px;
        line-height: 19.36px;
        width: 90%;
        font-weight: 600;
        text-align: left;
      }
    }
    &-content {
      color: rgb(136, 136, 136);
      font-size: 13px;
      padding-bottom: 20px;
      padding-top: 20px;
      padding-left: 12px;
      padding-right: 12px;
      .progress {
        ${FlexRowBetween};
        width: 100%;
        margin-bottom: 5px;
        .earned {
          font-size: 18px;
          font-weight: bold;
          color: rgb(0, 0, 0);
        }
      }
      ion-progress-bar {
        --ion-color-secondary: rgb(54, 181, 173);
        height: 8px;
        border-radius: 5px;
      }
    }
  }
`
