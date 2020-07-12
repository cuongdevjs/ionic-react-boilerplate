/**
 *
 * styled Campaign
 *
 */
import styled from 'styled-components'
import { NewsHeader, NewsContent } from 'pages/News/styled'
import { FlexRowCenter } from 'global/styted'

export const CampaignHeader = styled(NewsHeader)``

export const CampaignContent = styled(NewsContent)``

export const CampaignSearch = styled.div`
  ion-searchbar {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    --border-radius: 17px;
    .searchbar-input-container {
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(221, 221, 221);
      border-radius: 17px;
      input {
        font-size: 14px !important;
      }
      ion-icon {
        width: 16px;
      }
    }
  }
`

export const CampaignsNewest = styled.div`
  margin-top: 8px;
  .swiper-pagination {
    bottom: 2px;
    --bullet-background: rgb(54, 181, 173);
    --bullet-background-active: rgb(54, 181, 173);
  }
`

export const CampaignList = styled.div`
  margin-top: 20px;
`

export const CampaignCreateBtn = styled.div`
  ${FlexRowCenter};
  margin-top: 12px;
  ion-fab-button {
    --background: rgb(255, 255, 255);
    --background-activated: rgb(255, 255, 255);
    --background-focused: rgb(255, 255, 255);
    --background-hover: rgb(255, 255, 255);
    --box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.02);
    --color: rgb(0, 0, 0);
    border: 1px solid rgb(241, 241, 241);
    border-radius: 100%;
  }
`
