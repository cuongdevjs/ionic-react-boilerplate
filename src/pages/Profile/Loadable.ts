/**
*
* Asynchronously loads the component for Profile
*
*/

import { lazyLoad } from 'utils/loadable';

const Profile = lazyLoad(() => import('./index'), module => module.Profile);

export default Profile;