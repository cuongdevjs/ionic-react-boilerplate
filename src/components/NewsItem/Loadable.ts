/**
*
* Asynchronously loads the component for NewsItem
*
*/

import { lazyLoad } from 'utils/loadable';

const NewsItem = lazyLoad(() => import('./index'), module => module.NewsItem);


export default NewsItem;