/**
*
* Asynchronously loads the component for LoginSocialGroups
*
*/

import { lazyLoad } from 'utils/loadable';

const LoginSocialGroups = lazyLoad(() => import('./index'), module => module.LoginSocialGroups);


export default LoginSocialGroups;