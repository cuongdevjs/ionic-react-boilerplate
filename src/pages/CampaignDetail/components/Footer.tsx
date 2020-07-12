import React, { memo } from 'react'
import { IonFooter, IonButton, IonToolbar } from '@ionic/react'
import { CampaignDetailFooter } from '../styled'

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <IonFooter>
      <CampaignDetailFooter>
        <IonToolbar>
          <IonButton expand='block'>ỦNG HỘ</IonButton>
        </IonToolbar>
      </CampaignDetailFooter>
    </IonFooter>
  )
})
