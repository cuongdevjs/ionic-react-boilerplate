import React, { memo } from "react";
import { NewsList } from "../styled";
import TitleOfSegment from "components/TitleOfSegment/Loadable";
import NewsItem from "components/NewsItem/Loadable";
import {
  IonList,
  IonItem,
  IonThumbnail,
  IonSkeletonText,
  IonLabel,
} from "@ionic/react";
import IonInfinityScroll from "components/IonInfinityScroll/Loadable";
import { I_News } from "../types";

interface Props {
  loading: boolean;
  listNews: I_News[];
  isShowLoadMore: boolean;
  onSelectedNews: (news: I_News) => void;
  onLoadMore: (e: CustomEvent<void>) => void;
}

export const SegmentListNews = memo(
  ({
    loading,
    listNews,
    isShowLoadMore,
    onSelectedNews,
    onLoadMore,
  }: Props) => {
    return (
      <NewsList>
        <TitleOfSegment title="Tin tức khác " />
        <IonList>
          {loading
            ? [0, 1, 2].map((item) => (
              <IonItem key={item}>
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
            ))
            : listNews.map((news) => (
              <NewsItem
                key={news.id}
                news={news}
                onSelectedNews={onSelectedNews}
              />
            ))}
        </IonList>
        {isShowLoadMore && !loading && <IonInfinityScroll onLoadMore={onLoadMore} />}
      </NewsList>
    );
  }
);
