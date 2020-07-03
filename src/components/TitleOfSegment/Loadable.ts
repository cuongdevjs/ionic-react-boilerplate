/**
*
* Asynchronously loads the component for TitleOfSegment
*
*/

import { lazyLoad } from 'utils/loadable';

const TitleOfSegment = lazyLoad(() => import('./index'), module => module.TitleOfSegment);


export default TitleOfSegment;