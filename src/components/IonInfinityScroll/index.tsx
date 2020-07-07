/**
 *
 * IonInfinityScroll
 *
 */
import React, { memo } from "react";
import { IonInfinityScrollWrapper } from "./styled";
import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/react";

interface Props {
  onLoadMore: (e: CustomEvent<void>) => void;
}

export const IonInfinityScroll = memo(({ onLoadMore }: Props) => {
  // const loadData = useCallback((e) => {
  //   console.log("q3525");
  //   setTimeout(() => {
  //     e.target.complete();
  //   }, 2000);
  // }, []);

  return (
    <IonInfinityScrollWrapper>
      <IonInfiniteScroll threshold="100px" onIonInfinite={onLoadMore}>
        <IonInfiniteScrollContent
          loadingSpinner="bubbles"
          loadingText={undefined}
        />
      </IonInfiniteScroll>
    </IonInfinityScrollWrapper>
  );
});
