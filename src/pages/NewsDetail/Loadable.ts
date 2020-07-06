/**
*
* Asynchronously loads the component for NewsDetail
*
*/

import { lazyLoad } from 'utils/loadable';

const NewsDetail = lazyLoad(() => import('./index'), module => module.NewsDetail);

export default NewsDetail;