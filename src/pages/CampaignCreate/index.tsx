/**
 *
 * CampaignCreate
 *
 */

import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { reducer, sliceKey } from './slice'
import { selectCampaignCreate } from './selectors'
import { campaignCreateSaga } from './saga'
import {
  CampaignCreateContent,
  SegmentInfoCampaign,
  FormCampaignCreate,
  SegmentInfoRepresentative,
  UploadFileContainer
} from './styled'
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonTextarea,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonIcon
} from '@ionic/react'
import { Header, Footer } from './components'
import TitleOfSegment from 'components/TitleOfSegment/Loadable'
import { cloudUploadOutline } from 'ionicons/icons'

interface Props {}

export const CampaignCreate = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer })
  useInjectSaga({ key: sliceKey, saga: campaignCreateSaga })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const campaignCreate = useSelector(selectCampaignCreate)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch()

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen={true} forceOverscroll={true}>
        <CampaignCreateContent>
          <SegmentInfoCampaign>
            <TitleOfSegment title='Thông tin chiến dịch' />
            <FormCampaignCreate>
              <UploadFileContainer>
                <IonIcon icon={cloudUploadOutline} />
              </UploadFileContainer>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Tên chiến dịch</IonLabel>
                <IonInput
                  // onInput={_onChangeAddress}
                  // value={address}
                  type='text'
                />
              </IonItem>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Mục tiêu quyên góp</IonLabel>
                <IonInput
                  // onInput={_onChangePhone}
                  // value={phone}
                  type='number'
                  inputmode='numeric'
                />
              </IonItem>
              <IonGrid className='ion-no-padding'>
                <IonRow>
                  <IonCol className='ion-padding-end'>
                    <IonItem lines='none'>
                      <IonLabel position='stacked'>Mức độ khó khăn</IonLabel>
                      <IonSelect
                        okText='Okay'
                        cancelText='Dismiss'
                        interface='action-sheet'
                        // onInput={_onChangeAddress}
                        // value={address}
                      >
                        <IonSelectOption value='brown'>Brown</IonSelectOption>
                        <IonSelectOption value='blonde'>Blonde</IonSelectOption>
                        <IonSelectOption value='black'>Black</IonSelectOption>
                        <IonSelectOption value='red'>Red</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol className='ion-padding-start'>
                    <IonItem lines='none'>
                      <IonLabel position='stacked'>Loại chiến dịch</IonLabel>
                      <IonSelect
                        okText='Okay'
                        cancelText='Dismiss'
                        interface='action-sheet'
                        // onInput={_onChangeAddress}
                        // value={address}
                      >
                        <IonSelectOption value='brown'>Brown</IonSelectOption>
                        <IonSelectOption value='blonde'>Blonde</IonSelectOption>
                        <IonSelectOption value='black'>Black</IonSelectOption>
                        <IonSelectOption value='red'>Red</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Ngày hết hạn chiến dịch</IonLabel>
                <IonDatetime
                  displayFormat='DD/MM/YYYY'
                  pickerFormat='DD/MM/YYYY'
                  // value={birthday}
                  // onIonChange={_onChangeBirthday}
                />
              </IonItem>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Mô tả ngắn</IonLabel>
                <IonTextarea
                  autoGrow
                  rows={6}
                  cols={20}
                  placeholder='Enter any notes here...'
                />
              </IonItem>
            </FormCampaignCreate>
          </SegmentInfoCampaign>
          <SegmentInfoRepresentative>
            <TitleOfSegment title='Thông tin người đại diện' />
            <FormCampaignCreate>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Tên</IonLabel>
                <IonInput
                  // onInput={_onChangeLastName}
                  // value={lastName}
                  type='text'
                />
              </IonItem>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Email</IonLabel>
                <IonInput
                  // onInput={_onChangeFirstName}
                  // value={firstName}
                  type='text'
                />
              </IonItem>
              <IonItem lines='none'>
                <IonLabel position='stacked'>SĐT</IonLabel>
                <IonInput
                  // onInput={_onChangePhone}
                  // value={phone}
                  type='number'
                  inputmode='numeric'
                />
              </IonItem>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Địa chỉ</IonLabel>
                <IonInput
                  // onInput={_onChangeAddress}
                  // value={address}
                  type='text'
                />
              </IonItem>
              <IonItem lines='none'>
                <IonLabel position='stacked'>Ngày sinh</IonLabel>
                <IonDatetime
                  displayFormat='DD/MM/YYYY'
                  pickerFormat='DD/MM/YYYY'
                  // value={birthday}
                  // onIonChange={_onChangeBirthday}
                />
              </IonItem>
            </FormCampaignCreate>
          </SegmentInfoRepresentative>
        </CampaignCreateContent>
      </IonContent>
      <Footer />
    </IonPage>
  )
})
