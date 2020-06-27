/**
 *
 * Asynchronously loads the component for App
 *
 */

import { lazyLoad } from 'utils/loadable';

const App = lazyLoad(
  () => import('./index'),
  module => module.MainApp,
);

export default App