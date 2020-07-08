/**
*
* Asynchronously loads the component for SkeletonList
*
*/

import { lazyLoad } from 'utils/loadable';

const SkeletonList = lazyLoad(() => import('./index'), module => module.SkeletonList);


export default SkeletonList;