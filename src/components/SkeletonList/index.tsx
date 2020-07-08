/**
 *
 * SkeletonList
 *
 */
import React, { memo } from "react";
import { SkeletonListWrapper } from "./styled";
import { IonItem, IonThumbnail, IonSkeletonText, IonLabel } from "@ionic/react";

interface Props {
  lengthArray: number;
}

export const SkeletonList = memo(({ lengthArray }: Props) => {
  return (
    <>
      {Array.from(Array(lengthArray).keys()).map((item) => (
        <SkeletonListWrapper key={item}>
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <IonSkeletonText animated />
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText animated style={{ width: "50%" }} />
              </h3>
              <p>
                <IonSkeletonText animated style={{ width: "80%" }} />
              </p>
              <p>
                <IonSkeletonText animated style={{ width: "60%" }} />
              </p>
            </IonLabel>
          </IonItem>
        </SkeletonListWrapper>
      ))}
    </>
  );
});
