/**
 *
 * News
 *
 */

import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { reducer, sliceKey, GET_DETAIL_NEWS_ACTION } from './slice'
import { selectDetailNews, selectLoading } from './selectors'
import { newsSaga } from './saga'
import { IonPage, useIonViewWillEnter, IonLoading } from '@ionic/react'
import NewsDetail from 'pages/NewsDetail/Loadable'
import { useParams } from 'react-router'

interface Props {}

export const NewsDetailPage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer })
  useInjectSaga({ key: sliceKey, saga: newsSaga })

  const detailNews = useSelector(selectDetailNews)
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()
  const params: { id: string } = useParams()

  useIonViewWillEnter(() => {
    if (params.id) dispatch(GET_DETAIL_NEWS_ACTION({ id: params.id }))
  })

  return (
    <IonPage>
      <NewsDetail news={detailNews} />
      <IonLoading isOpen={loading} />
    </IonPage>
  )
})
