/**
 *
 * IonPullRefresh
 *
 */
import React, { memo } from "react";
import { IonPullRefreshWrapper } from "./styled";
import { IonRefresher, IonRefresherContent } from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";

interface Props {
  onRefresh: (event: CustomEvent<RefresherEventDetail>) => void;
}

export const IonPullRefresh = memo(({ onRefresh }: Props) => {
  // const doRefresh = useCallback((event: CustomEvent<RefresherEventDetail>) => {
  //   console.log("Begin async operation");
  //   setTimeout(() => {
  //     console.log("Async operation has ended");
  //     event.detail.complete();
  //   }, 2000);
  // }, []);

  return (
    <IonPullRefreshWrapper>
      <IonRefresher
        slot="fixed"
        pullFactor={0.5}
        pullMin={100}
        pullMax={200}
        onIonRefresh={onRefresh}
      >
        <IonRefresherContent
        // pullingIcon={chevronDownCircleOutline}
        // pullingText="Làm mới nội dung"
        // refreshingSpinner="circles"
        // refreshingText="Loading..."
        />
      </IonRefresher>
    </IonPullRefreshWrapper>
  );
});
