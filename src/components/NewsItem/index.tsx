/**
 *
 * NewsItem
 *
 */
import React, { memo } from "react";
import { NewsItemWrapper } from "./styled";
import { IonItem, IonLabel, IonThumbnail, IonIcon } from "@ionic/react";
import bgUrl from "assets/images/bgLogin.png";
import { timeOutline } from "ionicons/icons";

interface Props {}

export const NewsItem = memo((props: Props) => {
  return (
    <NewsItemWrapper className="ion-react-nav-detail-btn">
      <IonItem lines="none">
        <IonThumbnail slot="start">
          <img src={bgUrl} alt="bg" />
        </IonThumbnail>
        <IonLabel>
          <h3 className="title">
            Bạn đọc Dân trí giúp bé gái 6 tuổi bị bệnh ung thư hơn 120 triệu
            đồng. Bạn đọc Dân trí giúp bé gái 6 tuổi bị bệnh ung thư hơn 120
            triệu đồng
          </h3>
          <div className="time">
            <IonIcon icon={timeOutline} slot="start" />
            <span>18/02/2019</span>
          </div>
        </IonLabel>
      </IonItem>
    </NewsItemWrapper>
  );
});
