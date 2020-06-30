/**
 *
 * LoginSocialGroups
 *
 */
import React, { memo } from "react";
import { LoginSocialGroupsWrapper, BtnGroups } from "./styled";
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { logoFacebook, logoGoogle } from "ionicons/icons";

interface Props {}

export const LoginSocialGroups = memo((props: Props) => {
  return (
    <LoginSocialGroupsWrapper>
      <IonGrid>
        <IonRow>
          <IonCol>
            <BtnGroups className="facebook">
              <IonButton expand="block" className="btnSubmit">
                <IonIcon icon={logoFacebook} />
              </IonButton>
            </BtnGroups>
          </IonCol>
          <IonCol>
            <BtnGroups className="google">
              <IonButton expand="block" className="btnSubmit">
                <IonIcon icon={logoGoogle} />
              </IonButton>
            </BtnGroups>
          </IonCol>
        </IonRow>
      </IonGrid>
    </LoginSocialGroupsWrapper>
  );
});
