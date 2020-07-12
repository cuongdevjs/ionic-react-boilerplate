/**
 *
 * styled CampaignDetail
 *
 */
import styled, { css } from 'styled-components'
import { NewsDetailHeader } from 'pages/NewsDetail/styled'
import {
  FlexCol,
  FlexRowBetween,
  FlexRowStart,
  FlexRowCenter
} from 'global/styted'
import { CampaignsNewest } from 'pages/Campaign/styled'

export const CampaignDetailHeader = styled(NewsDetailHeader)``
export const CampaignDetailSlides = styled(CampaignsNewest)``

export const CampaignDetailMain = styled.div`
  padding: 20px;
`

export const CampaignDetailMainStatus = styled.div`
  ion-button {
    --ion-color-danger: rgb(250, 100, 0);
    --border-radius: 4px;
    --padding-start: 12px;
    --padding-end: 12px;
    height: 2.3em;
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
  }
`

export const CampaignDetailMainTitle = styled.div`
  color: rgb(76, 76, 76);
  font-size: 19px;
  letter-spacing: -0.5px;
  line-height: 25px;
  text-align: left;
  font-weight: 700;
  margin: 12px 0;
`

export const CampaignDetailMainProgress = styled.div`
  ${FlexCol};
  font-size: 12px;
  .deadline {
    ${FlexRowBetween}
    > span {
      ${FlexRowStart};
      color: #888888;
    }
    ion-chip {
      margin: 0;
      height: 20px;
      font-size: 12px;
      background-color: rgb(255, 255, 255);
      border-radius: 3px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.12);
      padding: 4px 8px;
    }
  }
  .progress {
    ${FlexRowStart};
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
    margin: 8px 0;
  }
`

export const CampaignDetailMainCreator = styled.div`
  ion-card {
    margin-left: 0;
    margin-right: 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
    width: 100%;
    &-header {
      margin-bottom: 12px;
      padding: 0;
      height: 6px;
      background-color: rgb(246, 179, 39);
    }
    &-content {
      ion-item {
        --padding-start: 0;
        ion-avatar {
          width: 64px;
          height: 64px;
        }
        ion-label {
          margin-top: 0;
          margin-bottom: 0;
          margin-right: 0;
          .name {
            color: rgb(29, 29, 31);
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
            span {
              color: rgb(132, 132, 132);
              font-size: 12px;
              font-weight: 500;
            }
          }
          .action {
            ion-button {
              --border-radius: 20px;
              --padding-start: 24px;
              --padding-end: 24px;
              --padding-top: 7px;
              --padding-bottom: 7px;
              height: auto;
              &.call {
                --background: rgba(50, 197, 255, 0.2);
                --background-activated: rgba(50, 197, 255, 0.2);
                --background-focused: rgba(50, 197, 255, 0.2);
                --background-hover: rgba(50, 197, 255, 0.2);
                margin-right: 8px;
              }
              &.message {
                --background: rgba(247, 181, 0, 0.2);
                --background-activated: rgba(247, 181, 0, 0.2);
                --background-focused: rgba(247, 181, 0, 0.2);
                --background-hover: rgba(247, 181, 0, 0.2);
              }
            }
          }
        }
      }
    }
  }
`

export const CampaignDetailMainParagraph = styled.div<{ isCollapse: boolean }>`
  .text {
    position: relative;
    transition: all 0.5s;
    color: #1d1d1f;
    line-height: 22px;
    ${props =>
      props.isCollapse &&
      css`
        white-space: pre-wrap;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
      `}
    &::after {
      content: '';
      bottom: 0;
      width: 100%;
      height: 100%;
      left: 0;
      ${props =>
        props.isCollapse &&
        css`
          position: absolute;
          background-image: linear-gradient(
            180deg,
            rgb(246, 246, 246) 0%,
            rgba(246, 246, 246, 0) 1.3%,
            rgb(246, 246, 246) 90%
          );
        `}
    }
  }
  .action {
    ${FlexRowCenter};
    margin-top: 12px;
    ion-button {
      --background: rgb(255, 255, 255);
      --background-activated: rgb(255, 255, 255);
      --background-focused: rgb(255, 255, 255);
      --background-hover: rgb(255, 255, 255);
      --border-radius: 7px;
      --box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.02);
      --padding-start: 3.5em;
      --padding-end: 3.5em;
      color: rgb(29, 29, 31);
      font-size: 14px;
      font-weight: 600;
    }
  }
`

export const CampaignDetailMainDocuments = styled.div`
  ion-card {
    margin-left: 0;
    margin-right: 0;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
    width: 100%;
    &-header {
      padding: 0px 12px;
      background: rgb(100, 109, 152);
      --ion-toolbar-background: rgb(100, 109, 152);
      --color: rgb(255, 255, 255);
      --ion-text-color: rgb(255, 255, 255);
    }
    &-content {
      padding: 0;
      .file {
        background-color: rgb(255, 255, 255);
        box-shadow: 0 1px 0 0 rgba(216, 216, 216, 0.5);
        ion-item {
          --padding-start: 12px;
          --padding-end: 12px;
          --padding-top: 6px;
          --padding-bottom: 6px;
          --border-width: 0px 0px 0.55px 0px;
          --border-color: rgba(216, 216, 216, 0.75);
          .icon {
            ${FlexRowCenter}
            background-color: rgba(100, 109, 152, 0.2);
            border-radius: 100%;
            margin-right: 12px;
            width: 32px;
            height: 32px;
          }
          ion-label {
            --color: rgb(108, 108, 108);
            font-size: 14px;
          }
        }
      }
    }
  }
`

export const CampaignDetailMainComments = styled.div``

export const CampaignDetailFooter = styled.div`
  ion-toolbar {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    background-color: #ffffff;
    --ion-safe-area-bottom: 10px;
    --padding-start: 0;
    --padding-end: 0;
    --padding-top: 0;
    --padding-bottom: 0;
    ion-button {
      --border-radius: 5px;
      --ion-color-primary-shade: #36b5ad;
      --ion-color-primary: #36b5ad;
      --color: #fff;
      --ion-color-primary-tint: #36b5ad;
      height: 2.8em;
      font-size: 14px;
      margin: 0;
    }
  }
`
