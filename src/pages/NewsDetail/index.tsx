/**
 *
 * NewsDetail
 *
 */

import React, { memo, useCallback } from 'react'

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
import {
  arrowBackOutline,
  timeOutline,
  shareSocialOutline
} from 'ionicons/icons'
import { I_News } from 'pages/News/types'
import { formatTime } from 'utils/functionHelper'
import { $get } from 'utils/axios'
import { SocialSharing } from '@ionic-native/social-sharing'

interface Props {
  news: I_News
}

export const NewsDetail = memo(({ news }: Props) => {
  const [avt, setAvt] = React.useState('')

  const getAvt = useCallback(async () => {
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

  const onShare = useCallback(() => {
    console.log('sfaf')
    // SocialSharing.share(
    //   news?.excerpt?.rendered,
    //   news?.title?.rendered,
    //   avt || bgUrl,
    //   window.location.href
    // )
    // SocialSharing.shareViaFacebook(
    //   'nguyen manh cuong',
    //   avt || bgUrl,
    //   'https://facebook.com/nguyenmanhcuong.stf'
    // )
    //   .then(() => {
    //     // Sharing via email is possible
    //   })
    //   .catch(() => {
    //     // Sharing via email is not possible
    //   })
    SocialSharing.shareWithOptions({
      message: 'share this', // not supported on some apps (Facebook, Instagram)
      subject: 'the subject', // fi. for email
      files: ['', ''], // an array of filenames either locally or remotely
      url: 'https://www.website.com/foo/#bar?a=b',
      chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
      // appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
      // iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
    })
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
            <IonButtons slot='end' onClick={onShare}>
              <IonIcon icon={shareSocialOutline} />
            </IonButtons>
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
