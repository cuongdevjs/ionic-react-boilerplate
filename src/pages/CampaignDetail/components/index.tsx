/**
 *
 * Asynchronously loads the component for Campaign
 *
 */
import * as React from 'react'
import { lazyLoad } from 'utils/loadable'
import SkeletonList from 'components/SkeletonList/Loadable'
import SkeletonCard from 'components/SkeletonCard/Loadable'
import {
  IonSkeletonText,
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonAvatar,
  IonLabel
} from '@ionic/react'

export const Header = lazyLoad(
  () => import('./Header'),
  module => module.Header,
  {
    fallback: <IonSkeletonText animated style={{ width: '100%' }} />
  }
)

export const Footer = lazyLoad(
  () => import('./Footer'),
  module => module.Footer,
  {
    fallback: <IonSkeletonText animated style={{ width: '100%' }} />
  }
)

export const CampaignGalleries = lazyLoad(
  () => import('./CampaignGalleries'),
  module => module.CampaignGalleries,
  {
    fallback: <SkeletonCard />
  }
)

export const CampaignStatus = lazyLoad(
  () => import('./CampaignStatus'),
  module => module.CampaignStatus,
  {
    fallback: (
      <IonButton>
        <IonSkeletonText animated />
      </IonButton>
    )
  }
)

export const CampaignTitle = lazyLoad(
  () => import('./CampaignTitle'),
  module => module.CampaignTitle,
  {
    fallback: (
      <>
        <IonSkeletonText animated style={{ width: '100%' }} />
        <IonSkeletonText animated style={{ width: '80%' }} />
        <IonSkeletonText animated style={{ width: '50%' }} />
      </>
    )
  }
)

export const CampaignProgress = lazyLoad(
  () => import('./CampaignProgress'),
  module => module.CampaignProgress,
  {
    fallback: (
      <>
        <IonSkeletonText animated style={{ width: '100%' }} />
        <IonSkeletonText animated style={{ width: '100%' }} />
        <IonSkeletonText animated style={{ width: '100%' }} />
      </>
    )
  }
)

export const CampaignParagraph = lazyLoad(
  () => import('./CampaignParagraph'),
  module => module.CampaignParagraph,
  {
    fallback: (
      <>
        <IonSkeletonText animated style={{ width: '100%' }} />
        <IonSkeletonText animated style={{ width: '80%' }} />
        <IonSkeletonText animated style={{ width: '60%' }} />
      </>
    )
  }
)

export const CampaignCreator = lazyLoad(
  () => import('./CampaignCreator'),
  module => module.CampaignCreator,
  {
    fallback: (
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonAvatar slot='start'>
              <IonSkeletonText
                animated
                style={{ width: '64px', height: '64px' }}
              />
            </IonAvatar>
            <IonLabel>
              <IonSkeletonText animated style={{ width: '100%' }} />
              <IonSkeletonText animated style={{ width: '80%' }} />
            </IonLabel>
          </IonItem>
        </IonCardContent>
      </IonCard>
    )
  }
)

export const CampaignDocuments = lazyLoad(
  () => import('./CampaignDocuments'),
  module => module.CampaignDocuments,
  {
    fallback: (
      <IonCard>
        <IonCardContent>
          <SkeletonList lengthArray={3} />
        </IonCardContent>
      </IonCard>
    )
  }
)

export const CampaignComments = lazyLoad(
  () => import('./CampaignComments'),
  module => module.CampaignComments,
  {
    fallback: (
      <>
        <IonSkeletonText animated style={{ width: '50%' }} />
        <IonCard>
          <IonCardContent>
            <SkeletonList lengthArray={3} />
          </IonCardContent>
        </IonCard>
      </>
    )
  }
)
