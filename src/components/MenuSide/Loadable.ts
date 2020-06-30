/**
*
* Asynchronously loads the component for MenuSide
*
*/

import { lazyLoad } from 'utils/loadable';

const MenuSide = lazyLoad(() => import('./index'), module => module.MenuSide);


export default MenuSide;