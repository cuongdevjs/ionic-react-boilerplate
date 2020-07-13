import React, { memo } from 'react'
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from '@ionic/react'
import { HomeHeader } from '../styled'

interface Props {}

export const Header = memo((props: Props) => {
  return (
    <IonHeader>
      <HomeHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle class='ion-text-center'>Yoolove</IonTitle>
        </IonToolbar>
      </HomeHeader>
    </IonHeader>
  )
})
