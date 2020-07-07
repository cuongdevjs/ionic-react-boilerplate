/**
*
* Asynchronously loads the component for IonPullRefresh
*
*/

import { lazyLoad } from 'utils/loadable';

const IonPullRefresh = lazyLoad(() => import('./index'), module => module.IonPullRefresh);


export default IonPullRefresh;