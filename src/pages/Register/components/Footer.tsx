import React from "react";

import { RegisterActionOption, RegisterFooter } from "../styled";
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";

interface Props {}

export const Footer = (props: Props) => {
  const history = useHistory();

  return (
    <RegisterFooter>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-align-self-center ion-text-center">
            <RegisterActionOption onClick={() => history.push("/login")}>
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
