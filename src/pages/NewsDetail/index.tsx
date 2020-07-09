/**
 *
 * NewsDetail
 *
 */

import React, { memo } from 'react'

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonSkeletonText
} from '@ionic/react'
import {
  NewsDetailHeader,
  NewsDetailContent,
  NewsDetailBg,
  NewsDetailTime,
  NewsDetailTitle
} from './styled'
import bgUrl from 'assets/images/bgProfile.png'
import { arrowBackOutline, timeOutline } from 'ionicons/icons'
import { I_News } from 'pages/News/types'
import { formatTime } from 'utils/functionHelper'
import { $get } from 'utils/axios'

interface Props {
  news: I_News
}

export const NewsDetail = memo(({ news }: Props) => {
  const [avt, setAvt] = React.useState('')

  const getAvt = React.useCallback(async () => {
    try {
      const data = await $get(`/wp/v2/media/${news?.featured_media || 0}`)
      setAvt(data?.data?.source_url || bgUrl)
    } catch {
      setAvt(bgUrl)
    }
  }, [news])

  React.useEffect(() => {
    setAvt('')
    getAvt()
  }, [getAvt])

  return (
    <>
      <IonHeader translucent>
        <NewsDetailHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton
                icon={arrowBackOutline}
                text={''}
                defaultHref='/news'
              />
            </IonButtons>
            <IonTitle>Chi tiết tin tức</IonTitle>
          </IonToolbar>
        </NewsDetailHeader>
      </IonHeader>
      <IonContent fullscreen>
        <NewsDetailBg>
          {avt ? (
            <img src={avt} alt='img' />
          ) : (
            <IonSkeletonText
              style={{ height: '250px', width: '100%' }}
              animated
            />
          )}
        </NewsDetailBg>
        <NewsDetailTime>
          <IonIcon icon={timeOutline} slot='start' />
          <span>
            &nbsp;{formatTime(news?.modified || new Date().toString())}
          </span>
        </NewsDetailTime>
        <NewsDetailTitle>{news?.title?.rendered || 'N/A'}</NewsDetailTitle>
        <NewsDetailContent
          dangerouslySetInnerHTML={{ __html: news?.content?.rendered || '' }}
        />
      </IonContent>
    </>
  )
})
