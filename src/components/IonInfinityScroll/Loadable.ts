/**
*
* Asynchronously loads the component for IonInfinityScroll
*
*/

import { lazyLoad } from 'utils/loadable';

const IonInfinityScroll = lazyLoad(() => import('./index'), module => module.IonInfinityScroll);


export default IonInfinityScroll;