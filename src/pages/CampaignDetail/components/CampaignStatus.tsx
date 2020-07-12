import React, { memo } from 'react'
import { CampaignDetailMainStatus } from '../styled'
import { IonButton } from '@ionic/react'

interface Props {
  campaignLevel: string
}

export const CampaignStatus = memo(({ campaignLevel }: Props) => {
  return (
    <CampaignDetailMainStatus>
      <IonButton color='danger'>{campaignLevel}</IonButton>
    </CampaignDetailMainStatus>
  )
})
