/**
*
* Asynchronously loads the component for Home
*
*/

import { lazyLoad } from 'utils/loadable';

const Home = lazyLoad(() => import('./index'), module => module.Home);

export default Home