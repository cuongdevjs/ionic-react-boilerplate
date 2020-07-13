import IonPullRefresh from 'components/IonPullRefresh/Loadable'
import React, { memo, useCallback, useMemo, useState, useEffect } from 'react'
import { actions, GET_LIST_CAMPAIGN_ACTION, reducer, sliceKey } from './slice'
import { CampaignContent } from './styled'
import { campaignSaga } from './saga'
import {
  CreateCampaignBtn,
  Header,
  Search,
  SegmentListCampaign,
  SegmentNewestCampaigns
} from './components'
import {
  IonContent,
  IonPage,
  useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react'
import { selectListCampaign, selectLoading } from './selectors'
import { SIZE_PER_PAGE_GET_LIST } from './constants'
import { useDebounce } from 'utils/hooks/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps {}

export const Campaign = memo(({ history }: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer })
  useInjectSaga({ key: sliceKey, saga: campaignSaga })

  const [valueSearch, setValueSearch] = useState('')
  const debounceValueSearch = useDebounce({ value: valueSearch, delay: 1000 })
  const listCampaign = useSelector(selectListCampaign)
  const loading = useSelector(selectLoading)
  const dispatch = useDispatch()
  const listCampaignToFilter = useMemo(
    () =>
      listCampaign.filter(item =>
        item?.post_title
          ?.toLowerCase()
          ?.includes(debounceValueSearch.toLowerCase())
      ),
    [debounceValueSearch, listCampaign]
  )
  const listCampaignNewest = useMemo(
    () =>
      listCampaignToFilter.length && listCampaignToFilter.length > 3
        ? listCampaignToFilter.slice(0, 3)
        : listCampaignToFilter,
    [listCampaignToFilter]
  )
  const listCampaignOther = useMemo(
    () =>
      listCampaignToFilter.length && listCampaignToFilter.length > 3
        ? listCampaignToFilter.slice(3, listCampaignToFilter.length)
        : listCampaignToFilter,
    [listCampaignToFilter]
  )

  useEffect(() => {
    dispatch(
      GET_LIST_CAMPAIGN_ACTION({
        page: 1,
        per_page: SIZE_PER_PAGE_GET_LIST
      })
    )
    return () => {
      dispatch(actions.resetListCampaign())
      dispatch(actions.resetStatusPage())
    }
  }, [dispatch])

  useIonViewWillEnter(() => {
    // dispatch(
    //   GET_LIST_CAMPAIGN_ACTION({
    //     page: 1,
    //     per_page: SIZE_PER_PAGE_GET_LIST
    //   })
    // )
  })

  useIonViewWillLeave(() => {
    // dispatch(actions.resetListCampaign())
    // dispatch(actions.resetStatusPage())
  })

  const onRefresh = useCallback(
    e => {
      dispatch(actions.resetListCampaign())
      dispatch(actions.resetStatusPage())
      dispatch(
        GET_LIST_CAMPAIGN_ACTION({
          page: 1,
          per_page: SIZE_PER_PAGE_GET_LIST
        })
      )
      setTimeout(() => {
        e.target.complete()
      }, 2000)
    },
    [dispatch]
  )

  const onChangeValueSearch = useCallback(
    e => setValueSearch(e.detail.value),
    []
  )

  const onClickCampaignItem = useCallback(
    (ID: string) => history.push(`/campaign/${ID}`),
    [history]
  )

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen={true}>
        <IonPullRefresh onRefresh={onRefresh} />
        <CampaignContent>
          <Search
            valueSearch={valueSearch}
            onChangeValueSearch={onChangeValueSearch}
          />
          <SegmentNewestCampaigns
            loading={loading}
            listCampaignNewest={listCampaignNewest}
            onClick={onClickCampaignItem}
          />
          <SegmentListCampaign
            loading={loading}
            listCampaignOther={listCampaignOther}
            onClick={onClickCampaignItem}
          />
          <CreateCampaignBtn />
        </CampaignContent>
      </IonContent>
    </IonPage>
  )
})
