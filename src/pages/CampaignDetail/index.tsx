import IonPullRefresh from 'components/IonPullRefresh/Loadable'
import React, { memo, useCallback } from 'react'
import { actions, GET_DETAIL_CAMPAIGN, reducer } from './slice'
import {
  CampaignComments,
  CampaignCreator,
  CampaignDocuments,
  CampaignGalleries,
  CampaignParagraph,
  CampaignProgress,
  CampaignStatus,
  CampaignTitle,
  Footer,
  Header
} from './components'
import { CampaignDetailMain } from './styled'
import { campaignDetailSaga } from './saga'
import {
  IonContent,
  IonLoading,
  IonPage,
  useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react'
import { selectDetailCampaign } from './selectors'
import { selectIsLoading } from 'pages/App/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { useParams } from 'react-router'
import SkeletonCard from 'components/SkeletonCard/Loadable'
/**
 *
 * CampaignDetail
 *
 */

interface Props {}

export const CampaignDetail = memo((props: Props) => {
  useInjectSaga({ key: 'campaignDetail', saga: campaignDetailSaga })
  useInjectReducer({ key: 'campaignDetail', reducer: reducer })

  const params: { id?: string } = useParams()
  const dispatch = useDispatch()
  const dataCampaign = useSelector(selectDetailCampaign)
  const loading = useSelector(selectIsLoading)

  useIonViewWillEnter(() => {
    dispatch(GET_DETAIL_CAMPAIGN({ id: params?.id }))
  })

  useIonViewWillLeave(() => {
    dispatch(actions.resetData())
    dispatch(actions.resetStatusPage())
  })

  const onRefresh = useCallback(
    e => {
      dispatch(actions.resetData())
      dispatch(actions.resetStatusPage())
      dispatch(GET_DETAIL_CAMPAIGN({ id: params?.id }))
      setTimeout(() => {
        e.target.complete()
      }, 2000)
    },
    [dispatch, params]
  )

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonPullRefresh onRefresh={onRefresh} />
        {loading && !dataCampaign?.campGallery ? (
          <SkeletonCard />
        ) : (
          <CampaignGalleries galleries={dataCampaign?.campGallery || []} />
        )}
        {loading && !dataCampaign?.campaignLevel ? (
          <SkeletonCard />
        ) : (
          <CampaignDetailMain>
            {dataCampaign?.campaignLevel && (
              <CampaignStatus campaignLevel={dataCampaign?.campaignLevel} />
            )}
            {dataCampaign?.post_title && (
              <CampaignTitle title={dataCampaign?.post_title} />
            )}
            <CampaignProgress
              earned={dataCampaign?._give_form_earnings || '0'}
              goal={dataCampaign?._give_set_goal || '0'}
              deadline={
                dataCampaign?.give_form_expired_date || new Date().toString()
              }
            />
            <CampaignCreator
              name={dataCampaign?.targetName}
              email={dataCampaign?.targetEmail || '---'}
              phone={dataCampaign?.targetPhone || 'N/A'}
              birthday={dataCampaign?.targetBirthday || new Date().toString()}
            />
            <CampaignParagraph text={dataCampaign?._give_form_content} />
            <CampaignDocuments />
            <CampaignComments count={dataCampaign.comment_count || '0'} />
          </CampaignDetailMain>
        )}
      </IonContent>
      <Footer />

      <IonLoading
        animated
        cssClass='ionLoading'
        isOpen={loading}
        message={'Please wait...'}
      />
    </IonPage>
  )
})
