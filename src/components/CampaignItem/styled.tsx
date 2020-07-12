/**
 *
 * styled CampaignItem
 *
 */
import styled from 'styled-components'
import { FlexColBetween, FlexRowStart, FlexRowBetween } from 'global/styted'

export const CampaignItemWrapper = styled.div<{ percentProgress: number }>`
  position: relative;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(241, 241, 241);
  border-radius: 9px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.02);
  padding: 10px;
  margin-bottom: 12px;
  margin-top: 3px;
  padding-top: 16px;
  ion-item {
    --background: rgba(0, 0, 0, 0);
    --pading-start: 0;
    --ion-safe-area-left: 0;
    ion-thumbnail {
      --border-radius: 9px;
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
    .info {
      ${FlexRowBetween};
      font-size: 12px;
      color: #878787;
      .goal {
        ${FlexRowStart};
        margin-right: 12px;
      }
      .deadline {
        ${FlexRowStart};
        span {
          color: #e02020;
        }
      }
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: rgb(217, 243, 255);
    content: '';
  }
  &:after {
    width: ${props => props && props.percentProgress * 100}%;
    background: rgb(54, 181, 173);
  }
`
