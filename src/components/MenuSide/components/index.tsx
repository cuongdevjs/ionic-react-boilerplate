/**
 *
 * Asynchronously loads the component for MenuSide
 *
 */

import { lazyLoad } from "utils/loadable";

export const Header = lazyLoad(
  () => import("./Header"),
  (module) => module.Header
);

export const MenuItem = lazyLoad(
  () => import("./MenuItem"),
  (module) => module.MenuItem
);

export const Footer = lazyLoad(
  () => import("./Footer"),
  (module) => module.Footer
);
