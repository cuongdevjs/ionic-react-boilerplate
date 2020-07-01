import React from "react";
import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { MenuContentItem, MenuContentItemIcon } from "../styled";

interface Props {
  icon: string;
  label: string;
  onClick: () => void;
}

export const MenuItem = (props: Props) => {
  return (
    <MenuContentItem>
      <IonItem detail={false} onClick={props.onClick}>
        <MenuContentItemIcon slot="start">
          <IonIcon icon={props.icon} />
        </MenuContentItemIcon>
        <IonLabel>{props.label}</IonLabel>
      </IonItem>
    </MenuContentItem>
  );
};
