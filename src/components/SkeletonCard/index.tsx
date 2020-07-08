/**
 *
 * SkeletonCard
 *
 */
import React, { memo } from "react";
import { SkeletonCardWrapper } from "./styled";
import {
  IonCard,
  IonCardContent,
  IonSkeletonText,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";

interface Props {}

export const SkeletonCard = memo((props: Props) => {
  return (
    <SkeletonCardWrapper>
      <IonCard>
        <IonSkeletonText
          style={{ height: "250px", width: "100%", marginTop: 0 }}
          animated
        />
        <IonCardHeader>
          <IonCardTitle>
            <IonSkeletonText animated style={{ width: "70%" }} />
          </IonCardTitle>
          <IonCardSubtitle>
            <IonSkeletonText animated style={{ width: "30%" }} />
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonSkeletonText animated style={{ width: "50%" }} />
          <IonSkeletonText animated style={{ width: "80%" }} />
          <IonSkeletonText animated style={{ width: "100%" }} />
        </IonCardContent>
      </IonCard>
    </SkeletonCardWrapper>
  );
});
