import React, { memo } from 'react'
import { CampaignList } from '../styled'
import TitleOfSegment from 'components/TitleOfSegment/Loadable'
import { IonList } from '@ionic/react'
import CampaignItem from 'components/CampaignItem/Loadable'
import { I_Campaign } from '../types'
import SkeletonList from 'components/SkeletonList/Loadable'

interface Props {
  loading: boolean
  listCampaignOther: I_Campaign[]
  onClick: (ID: string) => void
}

export const SegmentListCampaign = memo(
  ({ loading, listCampaignOther, onClick }: Props) => {
    return (
      <CampaignList>
        <TitleOfSegment title='Chiến dịch khác' />
        <IonList>
          {loading ? (
            <SkeletonList lengthArray={5} />
          ) : (
            listCampaignOther.map(campaign => (
              <CampaignItem
                key={campaign.ID}
                campaign={campaign}
                onClick={onClick}
              />
            ))
          )}
        </IonList>
      </CampaignList>
    )
  }
)
