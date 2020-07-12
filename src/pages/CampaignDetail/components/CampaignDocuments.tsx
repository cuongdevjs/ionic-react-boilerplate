import React, { memo } from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonIcon,
  IonText,
  IonToolbar,
  IonItem,
  IonLabel
} from '@ionic/react'
import { CampaignDetailMainDocuments } from '../styled'
import { documentOutline } from 'ionicons/icons'

interface Props {
  // listDocuments: string;
}

export const CampaignDocuments = memo((props: Props) => {
  return (
    <CampaignDetailMainDocuments>
      <IonCard>
        <IonCardHeader>
          <IonToolbar>
            <IonText slot='start'>Tài liệu</IonText>
            <IonIcon slot='end' icon={documentOutline} />
          </IonToolbar>
        </IonCardHeader>
        <IonCardContent>
          <div className='file'>
            <IonItem lines='full'>
              <div className='icon'>
                <IonIcon icon={documentOutline} slot='start' />
              </div>
              <IonLabel>Bản sao giấy khai sinh</IonLabel>
            </IonItem>
          </div>
          <div className='file'>
            <IonItem lines='full'>
              <div className='icon'>
                <IonIcon icon={documentOutline} slot='start' />
              </div>
              <IonLabel>Bản sao giấy khai sinh</IonLabel>
            </IonItem>
          </div>
          <div className='file'>
            <IonItem lines='full'>
              <div className='icon'>
                <IonIcon icon={documentOutline} slot='start' />
              </div>
              <IonLabel>Bản sao giấy khai sinh</IonLabel>
            </IonItem>
          </div>
        </IonCardContent>
      </IonCard>
    </CampaignDetailMainDocuments>
  )
})
