import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from "@ionic/react";
import { NewsHeader } from "../styled";

interface Props {}

export const Header = React.memo((props: Props) => {
  return (
    <IonHeader>
      <NewsHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class="ion-text-center">Tin tức</IonTitle>
        </IonToolbar>
      </NewsHeader>
    </IonHeader>
  );
});
