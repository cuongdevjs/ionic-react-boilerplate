/**
 *
 * NewsItem
 *
 */
import React, { memo } from "react";
import { NewsItemWrapper } from "./styled";
import { IonItem, IonLabel, IonThumbnail, IonIcon, IonSkeletonText } from "@ionic/react";
import bgUrl from "assets/images/bgLogin.png";
import { timeOutline } from "ionicons/icons";
import { I_News } from "pages/News/types";
import { formatTime } from "utils/functionHelper";
import { $get } from "utils/axios";

interface Props {
  news: I_News;
  onSelectedNews: (news: I_News) => void
}

export const NewsItem = memo(({ news, onSelectedNews }: Props) => {
  const [avt, setAvt] = React.useState("");

  const getAvt = React.useCallback(async () => {
    try {
      const data = await $get(`/wp/v2/media/${news?.featured_media || 0}`);
      setAvt(data?.data?.source_url || bgUrl)
    } catch {
      setAvt(bgUrl)
    }
  }, [news])

  React.useEffect(() => {
    getAvt()
  }, [getAvt])

  return (
    <NewsItemWrapper className="ion-react-nav-detail-btn" onClick={() => onSelectedNews(news)}>
      <IonItem lines="none">
        <IonThumbnail slot="start">
          {avt ? <img src={avt} alt="bg" /> : <IonSkeletonText animated />}
        </IonThumbnail>
        <IonLabel>
          <h3 className="title">
            {news.title?.rendered}
          </h3>
          <div className="time">
            <IonIcon icon={timeOutline} slot="start" />
            <span>&nbsp;{formatTime(news?.modified || new Date().toString())}</span>
          </div>
        </IonLabel>
      </IonItem>
    </NewsItemWrapper>
  );
});
