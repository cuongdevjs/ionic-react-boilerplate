/**
*
* Asynchronously loads the component for CampaignCreate
*
*/

import { lazyLoad } from 'utils/loadable';

const CampaignCreate = lazyLoad(() => import('./index'), module => module.CampaignCreate);

export default CampaignCreate;