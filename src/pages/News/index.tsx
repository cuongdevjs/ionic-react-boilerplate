/**
 *
 * News
 *
 */

import React, { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey } from "./slice";
import { selectNews } from "./selectors";
import { newsSaga } from "./saga";
import { NewsContent } from "./styled";
import {
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonPage,
} from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";
import { Header, SegmentNewsHighlight, SegmentListNews } from "./components";
import IonNavStack from "components/IonNavStack/Loadable";
import NewsDetail from "pages/NewsDetail/Loadable";

interface Props {}

export const News = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const news = useSelector(selectNews);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const doRefresh = useCallback((event: CustomEvent<RefresherEventDetail>) => {
    console.log("Begin async operation");
    setTimeout(() => {
      console.log("Async operation has ended");
      event.detail.complete();
    }, 2000);
  }, []);

  return (
    <IonPage>
      <IonNavStack detail={() => <NewsDetail />}>
        <Header />
        <IonContent fullscreen={true}>
          <IonRefresher
            slot="fixed"
            pullFactor={0.5}
            pullMin={100}
            pullMax={200}
            onIonRefresh={doRefresh}
          >
            <IonRefresherContent
              // pullingIcon={chevronDownCircleOutline}
              pullingText="Làm mới nội dung"
              refreshingSpinner="circles"
              refreshingText="Loading..."
            />
          </IonRefresher>
          <NewsContent>
            <SegmentNewsHighlight />
            <SegmentListNews />
          </NewsContent>
        </IonContent>
      </IonNavStack>
    </IonPage>
  );
});
