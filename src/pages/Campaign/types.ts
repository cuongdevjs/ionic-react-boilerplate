/* --- STATE --- */

export interface payloadGetList {
	per_page?: number;
	page?: number;
}
export interface I_Campaign {
	ID: string;
	post_date?: string;
	post_modified?: string;
	feature_image?: string;
	post_title?: string;
	post_excerpt?: string;
	post_name?: string;
	comment_count: string;
	give_set_goal: string;
	give_form_earnings: string;
	give_form_expired_date: string;
}

export interface CampaignState {
	loading: boolean;
	error: boolean;
	success: boolean;
	listCampaign: I_Campaign[];
}

export type ContainerState = CampaignState;
