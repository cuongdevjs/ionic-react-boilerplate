import React from "react";
import { BgHeader, BgHeaderOverlay } from "../styled";
import { IonHeader } from "@ionic/react";

interface Props {
  bgUrl: string;
  height?: string;
}

export const Header = (props: Props) => {
  return (
    <IonHeader>
      <BgHeader bgUrl={props.bgUrl} height={props.height || "30vh"}>
        <BgHeaderOverlay />
      </BgHeader>
    </IonHeader>
  );
};
