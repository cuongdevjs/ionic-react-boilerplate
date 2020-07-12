import React, { memo } from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonAvatar,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/react'
import { CampaignDetailMainCreator } from '../styled'
import { callOutline, mailOutline } from 'ionicons/icons'

interface Props {
  avatar?: string
  name?: string
  birthday?: string
  phone: string
  email: string
}

export const CampaignCreator = memo(
  ({ avatar, name, birthday, phone, email }: Props) => {
    // get age creator
    const age = React.useMemo(
      () =>
        new Date().getFullYear() -
        (birthday ? new Date(birthday) : new Date()).getFullYear(),
      [birthday]
    )
    return (
      <CampaignDetailMainCreator>
        <IonCard>
          <IonCardHeader />
          <IonCardContent>
            <IonItem lines='none'>
              <IonAvatar slot='start'>
                <img
                  src={
                    avatar ||
                    'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
                  }
                  alt='img'
                />
              </IonAvatar>
              <IonLabel>
                <div className='name'>
                  {name || 'N/A'} {!isNaN(age) && <span>{age} tuổi</span>}
                </div>
                <div className='action'>
                  <IonButton className='call'>
                    <IonIcon icon={callOutline} />
                  </IonButton>
                  <IonButton className='message'>
                    <IonIcon icon={mailOutline} />
                  </IonButton>
                </div>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </CampaignDetailMainCreator>
    )
  }
)
