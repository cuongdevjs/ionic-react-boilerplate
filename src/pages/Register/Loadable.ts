/**
*
* Asynchronously loads the component for Register
*
*/

import { lazyLoad } from 'utils/loadable';

const Register = lazyLoad(() => import('./index'), module => module.Register);

export default Register;