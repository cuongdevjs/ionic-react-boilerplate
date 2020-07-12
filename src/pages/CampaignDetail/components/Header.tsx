import React, { memo } from 'react'
import { CampaignDetailHeader } from '../styled'
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonIcon
} from '@ionic/react'
import { arrowBackOutline, shareSocialOutline } from 'ionicons/icons'

interface Props {}

export const Header = memo((props: Props) => {
  return (
    <IonHeader translucent>
      <CampaignDetailHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton
              icon={arrowBackOutline}
              text={''}
              defaultHref='/campaign'
            />
          </IonButtons>
          <IonTitle>Chi tiết chiến dịch</IonTitle>
          <IonButtons slot='end'>
            <IonIcon icon={shareSocialOutline} />
          </IonButtons>
        </IonToolbar>
      </CampaignDetailHeader>
    </IonHeader>
  )
})
