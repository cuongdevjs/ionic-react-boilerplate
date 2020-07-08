/**
*
* Asynchronously loads the component for SkeletonCard
*
*/

import { lazyLoad } from 'utils/loadable';

const SkeletonCard = lazyLoad(() => import('./index'), module => module.SkeletonCard);


export default SkeletonCard;