import React, { memo } from 'react'
import { NewsList } from '../styled'
import TitleOfSegment from 'components/TitleOfSegment/Loadable'
import NewsItem from 'components/NewsItem/Loadable'
import { IonList } from '@ionic/react'
import IonInfinityScroll from 'components/IonInfinityScroll/Loadable'
import { I_News } from '../types'

interface Props {
  titleSegment?: string
  loading: boolean
  listNews: I_News[]
  isShowLoadMore: boolean
  onSelectedNews: (news: I_News) => void
  onLoadMore: (e: CustomEvent<void>) => void
}

export const SegmentListNews = memo(
  ({
    loading,
    listNews,
    titleSegment,
    isShowLoadMore,
    onSelectedNews,
    onLoadMore
  }: Props) => {
    return (
      <NewsList>
        <TitleOfSegment title={titleSegment || 'Tin tức khác '} />
        <IonList>
          {listNews.map(news => (
            <NewsItem
              key={news.id}
              news={news}
              onSelectedNews={onSelectedNews}
            />
          ))}
        </IonList>
        {isShowLoadMore && !loading && (
          <IonInfinityScroll onLoadMore={onLoadMore} />
        )}
      </NewsList>
    )
  }
)
