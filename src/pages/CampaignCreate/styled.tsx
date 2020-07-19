/**
 *
 * styled CampaignCreate
 *
 */
import styled from 'styled-components'
import { NewsHeader, NewsContent } from 'pages/News/styled'
import { FlexRowCenter } from 'global/styted'

export const CampaignCreateWrapper = styled.div``

export const CampaignCreateHeader = styled(NewsHeader)``

export const CampaignCreateContent = styled(NewsContent)``

export const FormCampaignCreate = styled.div`
  ion-item {
    --padding-start: 0;
    /* --ion-color-primary: transparent; */
    --ion-item-background: transparent;
    --background: transparent;
    --inner-padding-end: 0;
    ion-label.md {
      font-size: 15px !important;
      color: #404040;
    }
    ion-label.ios {
      font-size: 13px !important;
      font-weight: 600;
      color: #404040;
      margin-bottom: 5px;
    }
    ion-input,
    ion-datetime,
    ion-textarea,
    ion-select {
      --padding-start: 12px !important;
      background-color: #fff;
      border-radius: 24px;
      border: 1px solid rgba(54, 181, 173, 0.2);
      font-size: 14px;
    }
    ion-textarea {
      border-radius: 12px;
    }
    ion-input.md,
    ion-datetime.md {
      box-sizing: border-box;
      margin-top: 7px;
    }
  }
`

export const UploadFileContainer = styled.div`
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(157, 157, 157);
  width: 100%;
  height: 100px;
  margin-top: 12px;
  border-radius: 12px;
  ${FlexRowCenter};
  margin-bottom: 12px;
  ion-icon {
    font-size: 20px;
    --color: #080808;
  }
`

export const SegmentInfoCampaign = styled.div`
  margin-bottom: 32px;
  ion-thumbnail {
    --border-radius: 8px;
    width: 64px;
    height: 64px;
    border: 2px solid rgb(255, 255, 255);
    margin-bottom: 6px;
    box-shadow: 2px -1px 12px 0 rgba(0, 0, 0, 0.1);
  }
`

export const SegmentInfoRepresentative = styled.div`
  ion-avatar {
    width: 48px;
    height: 48px;
    border: 2px solid rgb(255, 255, 255);
    margin-bottom: 6px;
    box-shadow: 5px 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
`

export const CampaignCreateFooter = styled.div`
  ion-toolbar {
    --padding-start: 20px;
    --padding-end: 20px;
    --padding-top: 5px;
    --padding-botom: 5px;
    ion-button {
      font-size: 13px;
      text-transform: uppercase;
      --border-radius: 24px;
      --color: rgb(255, 255, 255);
      &.btnCancel {
        --padding-start: 24px;
        --padding-end: 24px;
        --background: rgb(188, 188, 188);
        --background-activated: rgb(188, 188, 188);
        --background-focused: rgb(188, 188, 188);
        --background-hover: rgb(188, 188, 188);
      }
      &.btnSubmit {
        --padding-start: 48px;
        --padding-end: 48px;
        --background: #36b5ad;
        --background-activated: #36b5ad;
        --background-focused: #36b5ad;
        --background-hover: #36b5ad;
        --box-shadow: 0 8px 18px 0 rgba(54, 181, 173, 0.27);
      }
    }
  }
`
