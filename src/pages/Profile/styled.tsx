/**
 *
 * styled Profile
 *
 */
import styled from 'styled-components'
import { FlexRowCenter } from 'global/styted'
import { NewsHeader, NewsContent } from 'pages/News/styled'

export const ProfileHeader = styled(NewsHeader)``

export const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
`

export const ProfileContentAvt = styled.div`
  position: relative;
  margin-bottom: 24px;
  ion-avatar {
    position: absolute;
    width: 64px;
    height: 64px;
    top: 72px;
    left: 16px;
    border: 6px solid rgb(255, 255, 255);
    span {
      ${FlexRowCenter};
      background-color: #ffffff;
      border-radius: 100%;
      box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.1);
      padding: 4px;
      bottom: -2px;
      right: -7px;
      position: absolute;
      ion-icon {
        color: #bbb;
        font-size: 12px;
      }
    }
  }
`

export const ProfileContentGroups = styled(NewsContent)``

export const ProfileContentGroupItem = styled.div`
  margin-bottom: 24px;
  ion-card {
    margin-left: 0;
    margin-right: 0;
    border: 1px solid #d0d0d0;
    border-radius: 10px;
    ion-card-content {
      padding: 24px;
      ion-item {
        --padding-start: 0;
        --ion-color-primary: #404040;
        ion-label.md {
          font-size: 15px !important;
          color: #404040;
        }
        ion-label.ios {
          font-size: 13px !important;
          font-weight: 600;
          color: #404040;
        }
        ion-input,
        ion-datetime {
          --padding-start: 12px !important;
          background-color: #f7f7f7;
          border-radius: 24px;
          border: 1px solid rgba(54, 181, 173, 0.2);
          font-size: 14px;
        }
        ion-input.md,
        ion-datetime.md {
          box-sizing: border-box;
          margin-top: 7px;
        }
      }
    }
  }
`

export const ProfileContentSubmit = styled.div`
  ${FlexRowCenter};
  margin-top: 24px;
  border-radius: 24px;
  ion-button {
    --box-shadow: 0 8px 18px 0 rgba(54, 181, 173, 0.27);
    --background: rgb(54, 181, 173);
    --background-activated: rgb(54, 181, 173);
    --background-hover: rgb(54, 181, 173);
    --background-focused: rgb(54, 181, 173);
    --border-radius: 24px;
    --color: rgb(255, 255, 255);
    --padding-start: 3.1em;
    --padding-end: 3.1em;
    font-size: 12px;
  }
`

export const ProfileFooter = styled.div``
