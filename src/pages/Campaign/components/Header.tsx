import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from "@ionic/react";
import { CampaignHeader } from "../styled";

interface Props { }

export const Header = React.memo((props: Props) => {
  return (
    <IonHeader>
      <CampaignHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class="ion-text-center">Chiến dịch</IonTitle>
        </IonToolbar>
      </CampaignHeader>
    </IonHeader>
  );
});
