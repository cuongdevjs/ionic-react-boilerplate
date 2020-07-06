import React from "react";
import { NewsHighlight } from "../styled";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import bgUrl from "assets/images/bgProfile.png";
import { timeOutline } from "ionicons/icons";

interface Props {}

export const SegmentNewsHighlight = React.memo((props: Props) => {
  return (
    <NewsHighlight>
      <IonCard>
        <img src={bgUrl} alt="img" />
        <IonCardHeader>
          <IonCardTitle>
            Truyền hình Hà Giang: Khánh thành trường mầm non Khuổi Luồn cho trẻ
            em vùng cao
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <span>
            Ngày 19/5/2020, Quỹ từ thiện YooLove của công ty TNHH Công nghệ
            Thông tin YooPay Việt Nam đã phối hợp cùng xã Hữu Sản, huyện Bắc
            Quang tỉnh Hà Giang tổ chức lễ khánh thành điểm trường mầm non thôn
            Khuổi Luồn.
          </span>
        </IonCardContent>
        <div className="time">
          <IonIcon icon={timeOutline} slot="start" />
          <span>18/02/2019</span>
        </div>
      </IonCard>
    </NewsHighlight>
  );
});
