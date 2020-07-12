import CampaignHighlight from 'components/CampaignHighlight/Loadable'
import React, { memo } from 'react'
import TitleOfSegment from 'components/TitleOfSegment/Loadable'
import { CampaignsNewest } from '../styled'
import { IonSlide, IonSlides } from '@ionic/react'
import { OPTIONS_SLIDE } from '../constants'
import { I_Campaign } from '../types'
import SkeletonCard from 'components/SkeletonCard/Loadable'

interface Props {
  loading: boolean
  listCampaignNewest: I_Campaign[]
  onClick: (ID: string) => void
}

export const SegmentNewestCampaigns = memo(
  ({ loading, listCampaignNewest, onClick }: Props) => {
    return (
      <CampaignsNewest>
        <TitleOfSegment title='Chiến dịch mới nhất' />
        {loading ? (
          <SkeletonCard />
        ) : (
          <IonSlides
            key={listCampaignNewest.map(campaign => campaign.ID).join('_')}
            pager={true}
            options={OPTIONS_SLIDE}
          >
            {listCampaignNewest.map(campaign => (
              <IonSlide key={campaign.ID}>
                <CampaignHighlight campaign={campaign} onClick={onClick} />
              </IonSlide>
            ))}
            <div className='swiper-pagination' />
          </IonSlides>
        )}
      </CampaignsNewest>
    )
  }
)
