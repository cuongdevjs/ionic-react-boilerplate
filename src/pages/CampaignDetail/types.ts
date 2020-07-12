/* --- STATE --- */

export interface I_DetailCampaign {
	ID?: string | number;
	post_date?: string;
	post_content?: string;
	post_title?: string;
	post_excerpt?: string;
	comment_count?: string;
	comment_status?: string;
	feature_image?: string;
	campaignLevel?: string;
	campaignCatergory?: string;
	campaignTxt?: string;
	campaignFile?: string;
	campGallery?: { id: string; url: string }[];
	targetName?: string;
	targetFeaturedImg?: string | boolean;
	targetBirthday?: string;
	targetID?: string | number;
	targetEmail?: string;
	targetPhone?: string;
	targetAddress?: string;
	_give_set_goal?: string;
	give_form_expired_date?: string;
	_give_form_content?: string;
	_give_form_earnings?: string;
	_give_form_goal_progress?: string;
}

export interface CampaignDetailState {
	dataCampaign: I_DetailCampaign;
	loading: boolean;
	error: boolean;
	success: boolean;
}

export type ContainerState = CampaignDetailState;
