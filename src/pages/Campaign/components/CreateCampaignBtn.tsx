import React, { memo } from "react";
import { CampaignCreateBtn } from "../styled";
import { IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

interface Props {}

export const CreateCampaignBtn = memo((props: Props) => {
  return (
    <CampaignCreateBtn>
      <IonFabButton>
        <IonIcon icon={add} />
      </IonFabButton>
    </CampaignCreateBtn>
  );
});
