import React, { memo } from 'react'
import { CampaignDetailMainComments } from '../styled'
import TitleOfSegment from 'components/TitleOfSegment/Loadable'

interface Props {
  count: string
}

export const CampaignComments = memo(({ count }: Props) => {
  return (
    <CampaignDetailMainComments>
      <TitleOfSegment title={count + ' Bình luận'} />
    </CampaignDetailMainComments>
  )
})
