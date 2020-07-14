import React, { memo } from 'react'
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonBackButton
} from '@ionic/react'
import { CampaignCreateHeader } from '../styled'
import { arrowBackOutline } from 'ionicons/icons'

interface Props {}

export const Header = memo((props: Props) => {
  return (
    <IonHeader>
      <CampaignCreateHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton
              icon={arrowBackOutline}
              text={''}
              defaultHref='/campaign'
            />
          </IonButtons>
          <IonTitle class='ion-text-center'>Tạo mới chiến dịch</IonTitle>
        </IonToolbar>
      </CampaignCreateHeader>
    </IonHeader>
  )
})
