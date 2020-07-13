/**
 *
 * styled Home
 *
 */
import styled from 'styled-components'
import { CampaignCreateBtn, CampaignHeader } from 'pages/Campaign/styled'

export const HomeHeader = styled(CampaignHeader)`
  ion-toolbar {
    --ion-toolbar-background: rgba(0, 0, 0, 0.5);
    --color: rgb(255, 255, 255);
    ion-title {
      color: #fff;
    }
    ion-menu-button {
      color: #fff;
    }
  }
`

export const HomeContent = styled.div`
  padding: 20px;
`

export const HomeContentBg = styled.div<{ bgUrl: string }>`
  margin-top: -60px;
  background-size: 100%;
  height: 150px;
  background-image: ${props => props.bgUrl && `url(${props.bgUrl})`};
`

export const SegmentCampaignsNewest = styled.div``

export const SegmentMyCampaigns = styled.div``

export const SegmentNews = styled.div``

export const SegmentBtnWatchAll = styled.div`
  ion-button {
    --background: rgb(54, 181, 173);
    --border-radius: 24px;
    --box-shadow: 0 8px 18px 0 rgba(54, 181, 173, 0.27);
    --background-activated: rgb(54, 181, 173);
    --background-focused: rgb(54, 181, 173);
    --background-hover: rgb(54, 181, 173);
    --color: rgb(255, 255, 255);
    --padding-start: 32px;
    --padding-end: 32px;
    font-size: 14px;
    margin-top: 12px;
    ion-icon {
      font-size: 13px;
      margin-top: 1px;
    }
  }
`

export const SegmentBtnCreate = styled(CampaignCreateBtn)``
