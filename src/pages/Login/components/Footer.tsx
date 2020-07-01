import React from "react";

import { LoginActionOption, LoginFooter } from "../styled";
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

interface Props {
  onGoRegisterPage: () => void;
}

export const Footer: React.FC<Props> = ({ onGoRegisterPage }) => {
  return (
    <LoginFooter>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-start">
            <LoginActionOption onClick={onGoRegisterPage}>
              <span className="icon">
                <IonIcon icon={chevronBackOutline} slot="start" />
              </span>
              <span>Đăng ký</span>
            </LoginActionOption>
          </IonCol>
          <IonCol className="ion-text-end">
            <LoginActionOption>
              <span>Quên mật khẩu?</span>
            </LoginActionOption>
          </IonCol>
        </IonRow>
      </IonGrid>
    </LoginFooter>
  );
};
