import React from "react";
import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { MenuContentItem, MenuContentItemIcon } from "../styled";

interface Props {
  icon: string;
  href: string;
  label: string;
}

export const MenuItem = (props: Props) => {
  return (
    <MenuContentItem>
      <IonItem detail={false} href={props.href}>
        <MenuContentItemIcon slot="start">
          <IonIcon icon={props.icon} />
        </MenuContentItemIcon>
        <IonLabel>{props.label}</IonLabel>
      </IonItem>
    </MenuContentItem>
  );
};
