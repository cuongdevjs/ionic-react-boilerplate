/**
 *
 * Asynchronously loads the component for News
 *
 */

import { lazyLoad } from "utils/loadable";

export const Header = lazyLoad(
  () => import("./Header"),
  (module) => module.Header
);

export const SegmentNewsHighlight = lazyLoad(
  () => import("./SegmentNewsHighlight"),
  (module) => module.SegmentNewsHighlight
);

export const SegmentListNews = lazyLoad(
  () => import("./SegmentListNews"),
  (module) => module.SegmentListNews
);
