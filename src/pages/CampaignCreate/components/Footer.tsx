import React, { memo } from 'react'
import {
  IonFooter,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonGrid,
  IonToolbar,
  IonSpinner
} from '@ionic/react'
import { CampaignCreateFooter } from '../styled'
import { saveOutline } from 'ionicons/icons'

interface Props {
  loading: boolean
  onReset: () => void
  onSubmit: () => void
}

export const Footer = memo(({ loading, onReset, onSubmit }: Props) => {
  return (
    <IonFooter>
      <CampaignCreateFooter>
        <IonToolbar>
          <IonGrid className='ion-no-padding'>
            <IonRow className='ion-no-padding ion-align-items-center ion-justify-content-between'>
              <IonCol size='6' className='ion-no-padding'>
                <IonButton onClick={onReset} className='btnCancel'>
                  Huỷ
                </IonButton>
              </IonCol>
              <IonCol className='ion-no-padding'>
                <div className='ion-float-right ion-align-items-center ion-justify-content-end'>
                  <IonButton
                    disabled={loading}
                    className='btnSubmit'
                    onClick={onSubmit}
                  >
                    Lưu &nbsp;
                    {loading ? (
                      <IonSpinner name='lines-small' />
                    ) : (
                      <IonIcon icon={saveOutline} />
                    )}
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </CampaignCreateFooter>
    </IonFooter>
  )
})
