/**
*
* Asynchronously loads the component for Campaign
*
*/

import { lazyLoad } from 'utils/loadable';

const Campaign = lazyLoad(() => import('./index'), module => module.Campaign);

export default Campaign;