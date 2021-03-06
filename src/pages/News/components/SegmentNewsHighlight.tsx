import bgUrl from 'assets/images/bgProfile.png';
import React from 'react';
import { $get } from 'utils/axios';
import { formatTime } from 'utils/functionHelper';
import { I_News } from '../types';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonSkeletonText
  } from '@ionic/react';
import { NewsHighlight } from '../styled';
import { timeOutline } from 'ionicons/icons';

interface Props {
  news: I_News
  onSelectedNews: (news: I_News) => void
}

export const SegmentNewsHighlight = React.memo(
  ({ news, onSelectedNews }: Props) => {
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
      getAvt()
    }, [getAvt])

    return (
      <NewsHighlight
        className='ion-react-nav-detail-btn'
        onClick={() => onSelectedNews(news)}
      >
        <IonCard>
          {avt ? (
            <img src={avt} alt='img' />
          ) : (
            <IonSkeletonText
              style={{ height: '250px', width: '100%', marginTop: 0 }}
              animated
            />
          )}
          <IonCardHeader>
            <IonCardTitle>{news?.title?.rendered}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <span
              dangerouslySetInnerHTML={{
                __html: news?.excerpt?.rendered || ''
              }}
            ></span>
          </IonCardContent>
          <div className='time'>
            <IonIcon icon={timeOutline} slot='start' />
            <span>
              &nbsp;{formatTime(news?.modified || new Date().toString())}
            </span>
          </div>
        </IonCard>
      </NewsHighlight>
    )
  }
)
