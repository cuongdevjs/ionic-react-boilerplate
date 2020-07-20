import React, { memo } from 'react'
// import { SegmentBtnCreate } from '../styled'
import { IonFabButton, IonIcon, IonFab } from '@ionic/react'
import { add } from 'ionicons/icons'

interface Props {
  onClick: () => void
}

export const SegmentCreateCampaign = memo(({ onClick }: Props) => {
  return (
    <IonFab
      vertical='bottom'
      horizontal='center'
      slot='fixed'
      onClick={onClick}
    >
      <IonFabButton>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  )
})
