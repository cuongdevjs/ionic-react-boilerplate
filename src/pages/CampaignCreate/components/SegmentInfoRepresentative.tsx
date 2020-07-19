import React, { memo, useCallback, FormEvent } from 'react'
import { SegmentInfoRepresentative, FormCampaignCreate } from '../styled'
import {
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonAvatar
} from '@ionic/react'
import TitleOfSegment from 'components/TitleOfSegment/Loadable'
//
import { Chooser, ChooserResult } from '@ionic-native/chooser'

interface Props {
  target_name: string
  target_birthday: string
  target_featured_avatar: string
  target_email: string
  target_phone: string
  target_address: string
  onChangeData: (key, value) => void
  onUploadImage: (key: string, value: ChooserResult) => void
}

export const SegmentInfo = memo(
  ({
    target_name,
    target_birthday,
    target_featured_avatar,
    target_email,
    target_phone,
    target_address,
    onChangeData,
    onUploadImage
  }: Props) => {
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

    const uploadFile = async () => {
      await Chooser.getFile('image/*')
        .then(file => {
          if (file) onUploadImage('target_featured_avatar', file)
        })
        .catch((error: any) => console.error(error))
    }

    return (
      <SegmentInfoRepresentative>
        <TitleOfSegment title='Thông tin người đại diện' />
        <FormCampaignCreate>
          <IonItem lines='none'>
            <IonLabel position='stacked'>Avatar</IonLabel>
            <IonAvatar onClick={uploadFile}>
              <img
                src={
                  target_featured_avatar ||
                  'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
                }
                alt='avt'
              />
            </IonAvatar>
          </IonItem>
          <IonItem lines='none'>
            <IonLabel position='stacked'>Tên</IonLabel>
            <IonInput
              onInput={e => onChangeInput(e, 'target_name')}
              value={target_name}
              required
              type='text'
            />
          </IonItem>
          <IonItem lines='none'>
            <IonLabel position='stacked'>Email</IonLabel>
            <IonInput
              onInput={e => onChangeInput(e, 'target_email')}
              value={target_email}
              required
              type='email'
            />
          </IonItem>
          <IonItem lines='none'>
            <IonLabel position='stacked'>SĐT</IonLabel>
            <IonInput
              onInput={e => onChangeInput(e, 'target_phone')}
              value={target_phone}
              required
              type='number'
              inputmode='numeric'
            />
          </IonItem>
          <IonItem lines='none'>
            <IonLabel position='stacked'>Địa chỉ</IonLabel>
            <IonInput
              onInput={e => onChangeInput(e, 'target_address')}
              value={target_address}
              required
              type='text'
            />
          </IonItem>
          <IonItem lines='none'>
            <IonLabel position='stacked'>Ngày sinh</IonLabel>
            <IonDatetime
              displayFormat='DD/MM/YYYY'
              pickerFormat='DD/MM/YYYY'
              value={target_birthday}
              onIonChange={e => onIonChange(e, 'target_birthday')}
            />
          </IonItem>
        </FormCampaignCreate>
      </SegmentInfoRepresentative>
    )
  }
)
