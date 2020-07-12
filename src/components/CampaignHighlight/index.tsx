/**
 *
 * CampaignHighlight
 *
 */
import React, { memo, useCallback } from 'react'
import { CampaignHighlightWrapper } from './styled'
import { IonCard, IonCardContent, IonProgressBar } from '@ionic/react'
import bgUrl from 'assets/images/bgProfile.png'
import { I_Campaign } from 'pages/Campaign/types'
import { formatCurrency } from 'utils/functionHelper'

interface Props {
  campaign: I_Campaign
  onClick: (ID: string) => void
}

export const CampaignHighlight = memo(({ campaign, onClick }: Props) => {
  const _onClick = useCallback(() => {
    const onClickCampaign = onClick
    onClickCampaign(campaign.ID)
  }, [campaign.ID, onClick])

  return (
    <CampaignHighlightWrapper
      className='ion-react-nav-detail-btn'
      onClick={_onClick}
    >
      <IonCard>
        <div className='bg'>
          <img src={campaign.feature_image || bgUrl} alt='bg' />
          <div className='overlay' />
          <div className='text'>{campaign.post_title}</div>
        </div>
        <IonCardContent>
          <div className='progress'>
            <span className='earned'>
              {formatCurrency(+campaign.give_form_earnings, 'decimal')}
            </span>
            <span className='goal'>
              / {formatCurrency(+campaign.give_set_goal)} cần hỗ trợ
            </span>
          </div>
          <IonProgressBar
            color='secondary'
            value={+campaign.give_form_earnings / +campaign.give_set_goal}
          />
        </IonCardContent>
      </IonCard>
    </CampaignHighlightWrapper>
  )
})
