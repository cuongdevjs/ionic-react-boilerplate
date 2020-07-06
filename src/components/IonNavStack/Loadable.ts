/**
*
* Asynchronously loads the component for IonNavStack
*
*/

import { lazyLoad } from 'utils/loadable';

const IonNavStack = lazyLoad(() => import('./index'), module => module.IonReactNav);


export default IonNavStack;