import React, { memo, useCallback, FormEvent } from 'react'
import {
  SegmentInfoCampaign,
  FormCampaignCreate,
  UploadFileContainer
} from '../styled'
import {
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
  IonIcon,
  IonThumbnail
} from '@ionic/react'
import TitleOfSegment from 'components/TitleOfSegment/Loadable'
import { cloudUploadOutline } from 'ionicons/icons'
//
import { Chooser, ChooserResult } from '@ionic-native/chooser'

interface Props {
  title: string
  goal: string
  to_date: string
  campaign_level: string
  campaign_category: string
  feature_image: string
  campaign_description: string
  onChangeData: (key, value) => void
  onUploadImage: (key: string, value: ChooserResult) => void
}

export const SegmentInfo = memo(
  ({
    title,
    goal,
    to_date,
    campaign_level,
    campaign_category,
    feature_image,
    campaign_description,
    onChangeData,
    onUploadImage
  }: Props) => {
    const uploadFile = async () => {
      await Chooser.getFile('image/*')
        .then(file => {
          if (file) onUploadImage('feature_image', file)
        })
        .catch((error: any) => console.error(error))
    }

    const onChangeInput = useCallback(
      (e: FormEvent<HTMLIonInputElement>, nameProperty: string) => {
        onChangeData(nameProperty, (e.target as any).value)
      },
      [onChangeData]
    )

    const onIonChange = useCallback(
      (e, nameProperty: string) => {
        onChangeData(nameProperty, (e.detail as any).value)
      },
      [onChangeData]
    )

    return (
      <SegmentInfoCampaign>
        <TitleOfSegment title='Thông tin chiến dịch' />
        <FormCampaignCreate>
          <UploadFileContainer onClick={uploadFile}>
            <IonIcon icon={cloudUploadOutline} />
          </UploadFileContainer>
          {feature_image && (
            <IonItem lines='none'>
              <IonThumbnail>
                <img src={feature_image} alt={'avt'} />
              </IonThumbnail>
            </IonItem>
          )}
          <IonItem lines='none'>
            <IonLabel position='stacked'>Tên chiến dịch</IonLabel>
            <IonInput
              onInput={e => onChangeInput(e, 'title')}
              value={title}
              required
              type='text'
            />
          </IonItem>
          <IonItem lines='none'>
            <IonLabel position='stacked'>Mục tiêu quyên góp</IonLabel>
            <IonInput
              onInput={e => onChangeInput(e, 'goal')}
              value={goal}
              required
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
                    onIonChange={e => onIonChange(e, 'campaign_level')}
                    value={campaign_level}
                  >
                    <IonSelectOption value='Khẩn cấp'>Khẩn cấp</IonSelectOption>
                    <IonSelectOption value='Gấp'>Gấp</IonSelectOption>
                    <IonSelectOption value='Bình thường'>
                      Bình thường
                    </IonSelectOption>
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
                    onIonChange={e => onIonChange(e, 'campaign_category')}
                    value={campaign_category}
                  >
                    <IonSelectOption value='Cộng đồng'>
                      Cộng đồng
                    </IonSelectOption>
                    <IonSelectOption value='Bussiness'>
                      Bussiness
                    </IonSelectOption>
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
              value={to_date}
              onIonChange={e => onIonChange(e, 'to_date')}
            />
          </IonItem>
          <IonItem lines='none'>
            <IonLabel position='stacked'>Mô tả ngắn</IonLabel>
            <IonTextarea
              autoGrow
              rows={6}
              required
              cols={20}
              placeholder='Enter any notes here...'
              value={campaign_description}
              onIonChange={e => onIonChange(e, 'campaign_description')}
            />
          </IonItem>
        </FormCampaignCreate>
      </SegmentInfoCampaign>
    )
  }
)
