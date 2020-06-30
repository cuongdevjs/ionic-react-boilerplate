import React from "react";

import { LoginActionOption, LoginFooter } from "../styled";
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";

interface Props {}

export const Footer: React.FC<Props> =  () => {
  const history = useHistory();
  return (
    <LoginFooter>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-start">
            <LoginActionOption onClick={() => history.push("/register")}>
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
