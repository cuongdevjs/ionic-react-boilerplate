import React, { memo } from 'react'
import { SegmentBtnCreate } from '../styled'
import { IonFabButton, IonIcon } from '@ionic/react'
import { add } from 'ionicons/icons'

interface Props {}

export const SegmentCreateCampaign = memo((props: Props) => {
  return (
    <SegmentBtnCreate>
      <IonFabButton>
        <IonIcon icon={add} />
      </IonFabButton>
    </SegmentBtnCreate>
  )
})
