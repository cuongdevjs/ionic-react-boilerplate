import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

interface Props {}

const LoginPage: React.FC<Props> = (props: Props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>My Navigation Bar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div>Nguyen manh cuong</div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
