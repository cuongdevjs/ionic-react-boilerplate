/* --- STATE --- */

type ContentHTMLType = { rendered: string };

export interface payloadGetList {
	per_page?: number;
	page?: number;
}
export interface I_News {
	id: string;
	date?: string;
	modified?: string;
	featured_media?: number;
	title?: ContentHTMLType;
	content?: ContentHTMLType;
	excerpt?: ContentHTMLType;
}

export interface NewsState {
	loading: boolean;
	error: boolean;
	success: boolean;
	listNews: I_News[];
	detailNewsSelected: I_News;
	isFetchInfinityDone: boolean;
}

export type ContainerState = NewsState;
