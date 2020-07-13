/**
 *
 * Asynchronously loads the component for News
 *
 */

import { lazyLoad } from "utils/loadable";

const News = lazyLoad(() => import("./index"), (module) => module.News);

export const NewsDetailPage = lazyLoad(
	() => import("./NewsDetailPage"),
	(module) => module.NewsDetailPage
);

export default News;
