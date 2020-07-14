import React, { memo } from 'react'
import {
  IonFooter,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonGrid,
  IonToolbar
} from '@ionic/react'
import { CampaignCreateFooter } from '../styled'
import { saveOutline } from 'ionicons/icons'

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <IonFooter>
      <CampaignCreateFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow className='ion-align-items-center ion-justify-content-between'>
              <IonCol size='6'>
                <IonButton className='btnCancel'>Huỷ</IonButton>
              </IonCol>
              <IonCol
                size='6'
                className='ion-float-right ion-align-items-center ion-justify-content-end'
              >
                <IonButton className='btnSubmit'>
                  Lưu &nbsp;
                  <IonIcon icon={saveOutline} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </CampaignCreateFooter>
    </IonFooter>
  )
})
