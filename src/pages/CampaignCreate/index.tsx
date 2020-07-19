/**
 *
 * CampaignCreate
 *
 */

import React, { memo, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { reducer, sliceKey, CREATE_CAMPAIGN_ACTION, actions } from './slice'
import { selectLoading, selectSuccess } from './selectors'
import { campaignCreateSaga } from './saga'
import { CampaignCreateContent } from './styled'
import { IonPage, IonContent } from '@ionic/react'
import {
  Header,
  Footer,
  SegmentInfoCampaign,
  SegmentInfoRepresentative
} from './components'
import { I_FormCreatCampaign } from './types'
import { INIT_FORM_CAMPAIGN } from './constants'
import { ChooserResult } from '@ionic-native/chooser'

interface Props {}

export const CampaignCreate = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer })
  useInjectSaga({ key: sliceKey, saga: campaignCreateSaga })

  const loading = useSelector(selectLoading)
  const success = useSelector(selectSuccess)
  const dispatch = useDispatch()
  const btnSubmitRef = useRef<HTMLButtonElement>(null!)
  const [form, setForm] = React.useState<I_FormCreatCampaign>(
    INIT_FORM_CAMPAIGN
  )

  const onChangeData = useCallback(
    (key, value) =>
      setForm(prevValue => ({ ...prevValue, ...{ [key]: value } })),
    []
  )

  const onUploadImage = useCallback(
    (key: string, file: ChooserResult) =>
      setForm(prevValue => ({ ...prevValue, ...{ [key]: file.dataURI } })),
    []
  )

  const onResetForm = useCallback(() => setForm(INIT_FORM_CAMPAIGN), [])

  const onClickSubmit = useCallback(() => btnSubmitRef?.current?.click(), [])

  const onSubmit = useCallback(
    e => {
      dispatch(CREATE_CAMPAIGN_ACTION(form))
      e.preventDefault()
    },
    [dispatch, form]
  )

  React.useEffect(() => {
    if (!loading && success) {
      onResetForm()
      dispatch(actions.resetStatusPage())
    }
  }, [loading, success, onResetForm, dispatch])

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen={true} forceOverscroll={true}>
        <CampaignCreateContent>
          <form onSubmit={onSubmit}>
            <SegmentInfoCampaign
              {...form}
              onChangeData={onChangeData}
              onUploadImage={onUploadImage}
            />
            <SegmentInfoRepresentative
              {...form}
              onChangeData={onChangeData}
              onUploadImage={onUploadImage}
            />
            <button ref={btnSubmitRef} type='submit' className='ion-hide'>
              Lưu
            </button>
          </form>
        </CampaignCreateContent>
      </IonContent>
      <Footer
        loading={loading}
        onReset={onResetForm}
        onSubmit={onClickSubmit}
      />
    </IonPage>
  )
})
