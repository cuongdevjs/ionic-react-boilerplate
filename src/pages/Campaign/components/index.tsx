/**
 *
 * Asynchronously loads the component for Campaign
 *
 */
import * as React from 'react'
import { lazyLoad } from 'utils/loadable'
import SkeletonList from 'components/SkeletonList/Loadable'
import SkeletonCard from 'components/SkeletonCard/Loadable'
import { IonSkeletonText } from '@ionic/react'

export const Header = lazyLoad(
  () => import('./Header'),
  module => module.Header,
  {
    fallback: <IonSkeletonText animated style={{ width: '100%' }} />
  }
)

export const Search = lazyLoad(
  () => import('./Search'),
  module => module.Search,
  {
    fallback: <IonSkeletonText animated style={{ width: '100%' }} />
  }
)

export const SegmentNewestCampaigns = lazyLoad(
  () => import('./SegmentNewestCampaigns'),
  module => module.SegmentNewestCampaigns,
  {
    fallback: <SkeletonCard />
  }
)

export const SegmentListCampaign = lazyLoad(
  () => import('./SegmentListCampaign'),
  module => module.SegmentListCampaign,
  {
    fallback: <SkeletonList lengthArray={5} />
  }
)

export const CreateCampaignBtn = lazyLoad(
  () => import('./CreateCampaignBtn'),
  module => module.CreateCampaignBtn,
  {
    fallback: <IonSkeletonText animated style={{ width: '40%' }} />
  }
)
