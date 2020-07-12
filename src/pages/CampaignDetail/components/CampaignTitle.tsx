import React, { memo } from 'react'
import { CampaignDetailMainTitle } from '../styled'

interface Props {
  title: string
}

export const CampaignTitle = memo(({ title }: Props) => {
  return <CampaignDetailMainTitle>{title}</CampaignDetailMainTitle>
})
