/**
 *
 * News
 *
 */

import React, { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, GET_LIST_NEWS_ACTION, actions } from "./slice";
import {
  selectListNews,
  selectIsFetchInfinityDone,
  selectLoading,
} from "./selectors";
import { newsSaga } from "./saga";
import { NewsContent } from "./styled";
import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { Header, SegmentNewsHighlight, SegmentListNews } from "./components";
import IonNavStack from "components/IonNavStack/Loadable";
import NewsDetail from "pages/NewsDetail/Loadable";
import IonPullRefresh from "components/IonPullRefresh/Loadable";
import { I_News } from "./types";

interface Props { }

export const News = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newsSaga });

  const [page, setPage] = React.useState(1);
  const [newsSelected, setNewsSelected] = React.useState<any>();
  const listNews = useSelector(selectListNews);
  const isFetchInfinityDone = useSelector(selectIsFetchInfinityDone);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const newsHighlight = React.useMemo(
    () => (listNews.length ? listNews[0] : null),
    [listNews]
  );

  React.useEffect(() => {
    page !== 1 && dispatch(GET_LIST_NEWS_ACTION({ page: page, per_page: 10 }));
  }, [dispatch, page]);

  useIonViewWillEnter(() => {
    page === 1 && dispatch(GET_LIST_NEWS_ACTION({ page: page, per_page: 10 }));
  });

  useIonViewWillLeave(() => {
    setPage(1);
    dispatch(actions.resetListNews());
    dispatch(actions.resetStatusPage());
    dispatch(actions.setIsFetchInfinityDone({ isDone: false }));
  });

  const onRefresh = useCallback(
    (e) => {
      dispatch(actions.resetListNews());
      dispatch(actions.resetStatusPage());
      dispatch(actions.setIsFetchInfinityDone({ isDone: false }));
      page !== 1
        ? setPage(1)
        : dispatch(GET_LIST_NEWS_ACTION({ page: page, per_page: 10 }));
      setTimeout(() => {
        e.target.complete();
      }, 2000);
    },
    [dispatch, page]
  );

  const onLoadMore = useCallback(
    (e) => {
      if (!isFetchInfinityDone) {
        setPage(page + 1);
        setTimeout(() => {
          e.target.complete();
        }, 2000);
      }
    },
    [isFetchInfinityDone, page]
  );

  const onSelectedNews = useCallback((news: I_News) =>
    setNewsSelected(news)
    , []);

  return (
    <IonPage>
      <IonNavStack
        data={newsSelected}
        detail={() => <NewsDetail news={newsSelected} />}
      >
        <Header />
        <IonContent fullscreen={true}>
          <IonPullRefresh onRefresh={onRefresh} />
          <NewsContent>
            {newsHighlight && (
              <SegmentNewsHighlight
                news={newsHighlight}
                onSelectedNews={onSelectedNews}
              />
            )}
            <SegmentListNews
              loading={loading}
              listNews={listNews}
              isShowLoadMore={!isFetchInfinityDone}
              onSelectedNews={onSelectedNews}
              onLoadMore={onLoadMore}
            />
          </NewsContent>
        </IonContent>
      </IonNavStack>
    </IonPage>
  );
});
