import React, { memo, useMemo } from 'react'
import { CampaignDetailMainProgress } from '../styled'
import { IonChip, IonIcon, IonProgressBar } from '@ionic/react'
import { formatCurrency } from 'utils/functionHelper'
import { timeOutline } from 'ionicons/icons'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import viLocale from 'date-fns/locale/vi'

interface Props {
  deadline: string
  earned: string
  goal: string
}

export const CampaignProgress = memo(({ deadline, earned, goal }: Props) => {
  const percentReachTo = useMemo(() => +earned / +goal, [earned, goal])
  return (
    <CampaignDetailMainProgress>
      <div className='deadline'>
        <span>
          <IonIcon icon={timeOutline} />
          &nbsp; Còn{' '}
          {formatDistanceToNowStrict(new Date(deadline), {
            locale: viLocale
          }) || 0}
        </span>
        <IonChip color='secondary'>
          Đạt {(percentReachTo * 100).toFixed(2)}%
        </IonChip>
      </div>
      <IonProgressBar color='secondary' value={percentReachTo} />
      <div className='progress'>
        <span className='earned'>{formatCurrency(+earned)}&nbsp;&nbsp;</span>
        <span className='goal'>/ {formatCurrency(+goal)} cần hỗ trợ</span>
      </div>
    </CampaignDetailMainProgress>
  )
})
