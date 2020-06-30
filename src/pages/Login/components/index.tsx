/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from "utils/loadable";

export const Header = lazyLoad(
  () => import("./Header"),
  (module) => module.Header
);

export const Main = lazyLoad(() => import("./Main"), (module) => module.Main);

export const Footer = lazyLoad(
  () => import("./Footer"),
  (module) => module.Footer
);
