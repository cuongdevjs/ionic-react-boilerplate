/**
*
* Asynchronously loads the component for Login
*
*/

import { lazyLoad } from 'utils/loadable';

const Login = lazyLoad(() => import('./index'), module => module.Login);


export default Login;