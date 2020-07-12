/**
*
* Asynchronously loads the component for CampaignDetail
*
*/

import { lazyLoad } from 'utils/loadable';

const CampaignDetail = lazyLoad(() => import('./index'), module => module.CampaignDetail);

export default CampaignDetail;