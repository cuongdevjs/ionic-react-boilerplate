import React, { memo } from 'react'
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react'
import { arrowForward } from 'ionicons/icons'
import { SegmentBtnWatchAll } from '../styled'

interface Props {
  onClick: () => void
}

export const SegmentBtnForward = memo(({ onClick }: Props) => {
  return (
    <SegmentBtnWatchAll>
      <IonRow>
        <IonCol>
          <div className='ion-text-center'>
            <IonButton onClick={onClick}>
              <div className='ion-justify-content-center ion-align-items-center'>
                <span>Xem tất cả&nbsp;</span>
                <IonIcon icon={arrowForward} />
              </div>
            </IonButton>
          </div>
        </IonCol>
      </IonRow>
    </SegmentBtnWatchAll>
  )
})
