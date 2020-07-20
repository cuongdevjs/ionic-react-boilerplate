import React, { useMemo, useCallback } from 'react'
import {
  IonPage,
  IonContent,
  useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react'
// import { menuController } from '@ionic/core'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import bgUrl from 'assets/images/bgProfile.png'
import { homeSaga } from './saga'
import { reducer, sliceKey } from './slice'
import {
  HomeContent,
  HomeContentBg,
  SegmentCampaignsNewest,
  SegmentMyCampaigns,
  SegmentNews
} from './styled'
import { Header, SegmentBtnCreate, SegmentBtnWatchAll } from './components'
import {
  sliceKey as sliceKeyNews,
  reducer as newsReducer,
  GET_LIST_NEWS_ACTION,
  actions as actionsNews
} from 'pages/News/slice'
import {
  sliceKey as sliceKeyCampaign,
  reducer as campaignReducer,
  GET_LIST_CAMPAIGN_ACTION,
  actions as actionsCampaign
} from 'pages/Campaign/slice'
import { campaignSaga } from 'pages/Campaign/saga'
import {
  selectListCampaign,
  selectLoading as selectLoadingCampaign
} from 'pages/Campaign/selectors'
import {
  SegmentNewestCampaigns,
  SegmentListCampaign
} from 'pages/Campaign/components'
import { newsSaga } from 'pages/News/saga'
import { SegmentListNews } from 'pages/News/components'
import {
  selectListNews,
  selectLoading as selectLoadingNews
} from 'pages/News/selectors'

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history }: Props) => {
  // inject reducer & saga news, campaign, ifself
  useInjectReducer({ key: sliceKey, reducer: reducer })
  useInjectSaga({ key: sliceKey, saga: homeSaga })
  useInjectReducer({ key: sliceKeyNews, reducer: newsReducer })
  useInjectSaga({ key: sliceKeyNews, saga: newsSaga })
  useInjectReducer({ key: sliceKeyCampaign, reducer: campaignReducer })
  useInjectSaga({ key: sliceKeyCampaign, saga: campaignSaga })
  const dispatch = useDispatch()
  const listNews = useSelector(selectListNews)
  const loadingNews = useSelector(selectLoadingNews)
  const listCampaign = useSelector(selectListCampaign)
  const loadingCampaign = useSelector(selectLoadingCampaign)

  const onResetData = useCallback(() => {
    // reset campaign reducer
    dispatch(actionsCampaign.resetListCampaign())
    dispatch(actionsCampaign.resetStatusPage())
    // reset news reducer
    dispatch(actionsNews.resetListNews())
    dispatch(actionsNews.resetStatusPage())
    dispatch(actionsNews.setIsFetchInfinityDone({ isDone: false }))
  }, [dispatch])

  const onLoadData = useCallback(() => {
    dispatch(GET_LIST_NEWS_ACTION({ page: 1, per_page: 3 }))
    dispatch(
      GET_LIST_CAMPAIGN_ACTION({
        page: 1,
        per_page: 10
      })
    )
  }, [dispatch])

  useIonViewWillEnter(() => {
    onResetData()
    onLoadData()
  })

  useIonViewWillLeave(() => {
    onResetData()
  })

  const loading = useMemo(() => loadingCampaign && loadingNews, [
    loadingCampaign,
    loadingNews
  ])

  const listCampaignNewest = useMemo(
    () =>
      listCampaign.length && listCampaign.length > 3
        ? listCampaign.slice(0, 3)
        : listCampaign,
    [listCampaign]
  )
  const listCampaignOther = useMemo(
    () =>
      listCampaign.length && listCampaign.length > 3
        ? listCampaign.slice(3, listCampaign.length)
        : listCampaign,
    [listCampaign]
  )

  const onRedirectToNewsDetailPage = useCallback(
    data => history.push(`/news/${data.id}`),
    [history]
  )

  const onRedirectToNewsPage = useCallback(() => history.push('/news'), [
    history
  ])

  const onRedirectToCampaignPage = useCallback(
    () => history.push('/campaign'),
    [history]
  )

  const onRedirectToCampaignCreatePage = useCallback(
    () => history.push('/campaign/create'),
    [history]
  )

  const onRedirectToCampaignDetailPage = useCallback(
    (ID: string) => history.push(`/campaign/${ID}`),
    [history]
  )

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen forceOverscroll>
        <HomeContentBg bgUrl={bgUrl} />
        <HomeContent>
          {/* campaign */}
          <SegmentCampaignsNewest>
            <SegmentNewestCampaigns
              loading={loading}
              listCampaignNewest={listCampaignNewest}
              onClick={onRedirectToCampaignDetailPage}
            />
          </SegmentCampaignsNewest>
          <SegmentMyCampaigns>
            <SegmentListCampaign
              loading={loading}
              listCampaignOther={listCampaignOther}
              onClick={onRedirectToCampaignDetailPage}
            />
            <SegmentBtnWatchAll onClick={onRedirectToCampaignPage} />
          </SegmentMyCampaigns>
          {/* news */}
          <SegmentNews>
            <SegmentListNews
              listNews={listNews}
              loading={loading}
              isShowLoadMore={false}
              onSelectedNews={onRedirectToNewsDetailPage}
              onLoadMore={() => {}}
            />
            <SegmentBtnWatchAll onClick={onRedirectToNewsPage} />
          </SegmentNews>
        </HomeContent>
        <SegmentBtnCreate onClick={onRedirectToCampaignCreatePage} />
      </IonContent>
    </IonPage>
  )
}
