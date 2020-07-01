import React from "react";

import { RegisterActionOption, RegisterFooter } from "../styled";
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

interface Props {
  onGoLoginPage: () => void;
}

export const Footer = ({ onGoLoginPage }: Props) => {
  return (
    <RegisterFooter>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-align-self-center ion-text-center">
            <RegisterActionOption onClick={onGoLoginPage}>
              <span className="icon">
                <IonIcon icon={chevronBackOutline} slot="start" />
              </span>
              <span>Quay lại đăng nhập</span>
            </RegisterActionOption>
          </IonCol>
        </IonRow>
      </IonGrid>
    </RegisterFooter>
  );
};
