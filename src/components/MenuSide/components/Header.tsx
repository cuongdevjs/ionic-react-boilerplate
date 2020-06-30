import React from "react";

import { IonHeader, IonItem, IonLabel, IonAvatar, IonButton, IonIcon } from "@ionic/react";
import {
  eyedropSharp,
} from "ionicons/icons";
import { MenuHeader, MenuHeaderAvatar } from "../styled";
import { I_InfoMySelf } from "pages/App/types";

interface Props {
  isLogged: boolean;
  infoMySelf: I_InfoMySelf;
}

export const Header = ({ isLogged, infoMySelf }: Props) => {
  return (
    <IonHeader>
      <MenuHeader>
        <IonItem lines="none">
          <MenuHeaderAvatar slot="start">
            <IonAvatar>
              <img
                src={infoMySelf?.avatar || "https://ionicframework.com/docs/demos/api/avatar/avatar.svg"}
                alt="avatar"
              />
            </IonAvatar>
          </MenuHeaderAvatar>
          <IonLabel class="ion-text-left">
            {!isLogged ? (
              <div className="not-logged">
                <h3>Bạn chưa đăng nhập</h3>
                <IonButton
                  size="default"
                  expand="block"
                  className="btnTargetLogin"
                >
                  Đăng nhập
                </IonButton>
              </div>
            ) : (
              <div className="logged">
                <div className="username">{ infoMySelf.username }</div>
                <div className="mail">{ infoMySelf.email }</div>
                <div className="linkTargetProfile">
                  <IonIcon icon={eyedropSharp} />
                  <span>Quan ly tai khoan</span>
                </div>
              </div>
            )}
          </IonLabel>
        </IonItem>
      </MenuHeader>
    </IonHeader>
  );
};
