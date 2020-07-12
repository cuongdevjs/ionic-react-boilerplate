import React, { memo } from 'react'
// import bgUrl from 'assets/images/bgProfile.png'
import { CampaignDetailSlides } from '../styled'
import { IonSlide, IonSlides } from '@ionic/react'
import { OPTIONS_SLIDE } from 'pages/Campaign/constants'

interface Props {
  galleries: { id: string; url: string }[]
}

export const CampaignGalleries = memo(({ galleries }: Props) => {
  return (
    <CampaignDetailSlides>
      <IonSlides
        key={galleries.map(item => item.id).join('_')}
        pager={true}
        options={OPTIONS_SLIDE}
      >
        {galleries.map(item => (
          <IonSlide key={item.id}>
            <img src={item.url} alt='img' />
          </IonSlide>
        ))}
      </IonSlides>
    </CampaignDetailSlides>
  )
})
