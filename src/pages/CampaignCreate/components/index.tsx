/**
 *
 * Asynchronously loads the component for CampaignCreate
 *
 */
import * as React from 'react'
import { lazyLoad } from 'utils/loadable'
// import SkeletonList from 'components/SkeletonList/Loadable'
// import SkeletonCard from 'components/SkeletonCard/Loadable'
import { IonSkeletonText } from '@ionic/react'

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
