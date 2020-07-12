/**
 *
 * CampaignItem
 *
 */
import React, { memo, useCallback } from 'react'
import { CampaignItemWrapper } from './styled'
import bgUrl from 'assets/images/bgLogin.png'
import { IonItem, IonThumbnail, IonLabel, IonIcon } from '@ionic/react'
import { golfOutline, calendarOutline } from 'ionicons/icons'
import { I_Campaign } from 'pages/Campaign/types'
import { formatCurrency } from 'utils/functionHelper'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import viLocale from 'date-fns/locale/vi'

interface Props {
  campaign: I_Campaign
  onClick: (ID: string) => void
}

export const CampaignItem = memo(({ onClick, campaign }: Props) => {
  const _onClick = useCallback(() => {
    const onClickCampaign = onClick
    onClickCampaign(campaign.ID)
  }, [campaign.ID, onClick])

  return (
    <CampaignItemWrapper
      className='ion-react-nav-detail-btn'
      percentProgress={+campaign.give_form_earnings / +campaign.give_set_goal}
      onClick={_onClick}
    >
      <IonItem lines='none'>
        <IonThumbnail slot='start'>
          <img src={campaign.feature_image || bgUrl} alt='bg' />
        </IonThumbnail>
        <IonLabel>
          <h3 className='title'>{campaign.post_title}</h3>
          <div className='info'>
            <div className='goal'>
              <IonIcon icon={golfOutline} slot='start' />
              <span>&nbsp;{formatCurrency(+campaign.give_set_goal)}</span>
            </div>
            <div className='deadline'>
              <IonIcon icon={calendarOutline} slot='start' />
              <span>
                &nbsp;Còn{' '}
                {campaign.give_form_expired_date
                  ? formatDistanceToNowStrict(
                      new Date(campaign.give_form_expired_date),
                      {
                        locale: viLocale
                      }
                    )
                  : '0 ngày'}
              </span>
            </div>
          </div>
        </IonLabel>
      </IonItem>
    </CampaignItemWrapper>
  )
})
