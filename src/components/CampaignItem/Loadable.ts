/**
*
* Asynchronously loads the component for CampaignItem
*
*/

import { lazyLoad } from 'utils/loadable';

const CampaignItem = lazyLoad(() => import('./index'), module => module.CampaignItem);


export default CampaignItem;