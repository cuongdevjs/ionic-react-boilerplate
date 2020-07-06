/**
 *
 * NewsDetail
 *
 */

import React, { memo } from "react";

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/react";
import {
  NewsDetailHeader,
  NewsDetailContent,
  NewsDetailBg,
  NewsDetailTime,
  NewsDetailTitle,
} from "./styled";
import bgUrl from "assets/images/bgProfile.png";
import { arrowBackOutline, timeOutline } from "ionicons/icons";

interface Props {}

export const NewsDetail = memo((props: Props) => {
  return (
    <>
      <IonHeader translucent>
        <NewsDetailHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                icon={arrowBackOutline}
                text={""}
                defaultHref="/home"
              />
            </IonButtons>
            <IonTitle>Chi tiết tin tức</IonTitle>
          </IonToolbar>
        </NewsDetailHeader>
      </IonHeader>
      <IonContent fullscreen>
        <NewsDetailBg>
          <img src={bgUrl} alt="bg" />
        </NewsDetailBg>
        <NewsDetailTime>
          <IonIcon icon={timeOutline} slot="start" />
          <span>18/02/2019</span>
        </NewsDetailTime>
        <NewsDetailTitle>
          Truyền hình Hà Giang: Khánh thành trường mầm non Khuổi Luồn cho trẻ em
          vùng cao
        </NewsDetailTitle>
        <NewsDetailContent>
          <p>
            Hà Giang là một trong những tỉnh có tỷ lệ hộ nghèo nhiều nhất cả
            nước. Trẻ em tại các huyện vùng cao của Hà Giang có cuộc sống khó
            khăn, việc học hành gặp nhiều thiếu thốn, thậm chí là ước mơ xa vời
            với nhiều em.
          </p>
          <p>
            Hà Giang là một trong những tỉnh có tỷ lệ hộ nghèo nhiều nhất cả
            nước. Trẻ em tại các huyện vùng cao của Hà Giang có cuộc sống khó
            khăn, việc học hành gặp nhiều thiếu thốn, thậm chí là ước mơ xa vời
            với nhiều em.
          </p>
          <p>
            Hà Giang là một trong những tỉnh có tỷ lệ hộ nghèo nhiều nhất cả
            nước. Trẻ em tại các huyện vùng cao của Hà Giang có cuộc sống khó
            khăn, việc học hành gặp nhiều thiếu thốn, thậm chí là ước mơ xa vời
            với nhiều em.
          </p>
          <p>
            Hà Giang là một trong những tỉnh có tỷ lệ hộ nghèo nhiều nhất cả
            nước. Trẻ em tại các huyện vùng cao của Hà Giang có cuộc sống khó
            khăn, việc học hành gặp nhiều thiếu thốn, thậm chí là ước mơ xa vời
            với nhiều em.
          </p>
        </NewsDetailContent>
      </IonContent>
    </>
  );
});
