/**
 *
 * Asynchronously loads the component for Campaign
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

export const SegmentBtnCreate = lazyLoad(
  () => import('./SegmentBtnCreate'),
  module => module.SegmentCreateCampaign,
  {
    fallback: <IonSkeletonText animated style={{ width: '40%' }} />
  }
)

export const SegmentBtnWatchAll = lazyLoad(
  () => import('./SegmentBtnWatchAll'),
  module => module.SegmentBtnForward,
  {
    fallback: <IonSkeletonText animated style={{ width: '40%' }} />
  }
)
