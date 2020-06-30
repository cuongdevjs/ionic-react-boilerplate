import { lazyLoad } from "utils/loadable";

export const Main = lazyLoad(() => import("./Main"), (module) => module.Main);

export const Footer = lazyLoad(
  () => import("./Footer"),
  (module) => module.Footer
);
