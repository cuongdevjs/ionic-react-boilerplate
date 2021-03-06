import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { eyedropOutline } from "ionicons/icons";
import { ProfileHeader } from "../styled";

interface Props {}

export const Header = React.memo((props: Props) => {
  return (
    <IonHeader>
      <ProfileHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class="ion-text-center">Hồ sơ</IonTitle>
          <IonButtons slot="end">
            <IonIcon icon={eyedropOutline} />
          </IonButtons>
        </IonToolbar>
      </ProfileHeader>
    </IonHeader>
  );
});
