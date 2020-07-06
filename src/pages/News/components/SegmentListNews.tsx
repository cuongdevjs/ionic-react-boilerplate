import React, { memo, useCallback } from "react";
import { NewsList } from "../styled";
import TitleOfSegment from "components/TitleOfSegment/Loadable";
import NewsItem from "components/NewsItem/Loadable";
import {
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";

interface Props {}

export const SegmentListNews = memo((props: Props) => {
  const loadData = useCallback((e) => {
    console.log("q3525");
    setTimeout(() => {
      e.target.complete();
    }, 2000);
  }, []);

  return (
    <NewsList>
      <TitleOfSegment title="Tin tức khác " />
      <IonList>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </IonList>
      <IonInfiniteScroll threshold="0px" onIonInfinite={loadData}>
        <IonInfiniteScrollContent
          loadingSpinner="circles"
          loadingText={undefined}
        />
      </IonInfiniteScroll>
    </NewsList>
  );
});
