/**
*
* Asynchronously loads the component for CampaignHighlight
*
*/

import { lazyLoad } from 'utils/loadable';

const CampaignHighlight = lazyLoad(() => import('./index'), module => module.CampaignHighlight);


export default CampaignHighlight;