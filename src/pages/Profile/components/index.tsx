/**
 *
 * Asynchronously loads the component for Profile
 *
 */

import { lazyLoad } from "utils/loadable";

export const Header = lazyLoad(
  () => import("./Header"),
  (module) => module.Header
);

export const SegmentInfoDisplay = lazyLoad(
  () => import("./SegmentInfoDisplay"),
  (module) => module.SegmentInfoDisplay
);


export const SegmentAvatar = lazyLoad(
  () => import("./SegementAvatar"),
  (module) => module.SegmentAvatar
);



export const SegmentInfoEditable = lazyLoad(
  () => import("./SegmentInfoEditable"),
  (module) => module.SegmentInfoEditable
);
