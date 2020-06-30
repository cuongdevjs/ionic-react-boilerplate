import React from "react";

import { IonFooter, IonButton } from "@ionic/react";
import { MenuFooter, MenuFooterLogout, MenuFooterLicense } from "../styled";

interface Props {
  isLogged: boolean;
  logout: (event?: React.MouseEvent<HTMLIonButtonElement>) => void;
}

export const Footer = (props: Props) => {
  return (
    <IonFooter>
      <MenuFooter>
        <MenuFooterLogout>
          {props.isLogged && (
            <IonButton
              size="default"
              expand="block"
              className="btnTargetLogout"
              onClick={props.logout}
            >
              Đăng xuất
            </IonButton>
          )}
        </MenuFooterLogout>
        <MenuFooterLicense>
          <div>© Copyright 2020 Yoolove. </div>
          <div>All rights reserved.</div>
        </MenuFooterLicense>
      </MenuFooter>
    </IonFooter>
  );
};
