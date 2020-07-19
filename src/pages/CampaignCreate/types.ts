/* --- STATE --- */
export interface I_FormCreatCampaign {
	title: string;
	goal: string;
	to_date: string;
	campaign_level: string;
	campaign_category: string;
	feature_image: string;
	campaign_description: string;
	target_name: string;
	target_birthday: string;
	target_featured_avatar: string;
	target_email: string;
	target_phone: string;
	target_address: string;
}

export interface CampaignCreateState {
	loading: boolean;
	success: boolean;
	error: boolean;
}

export type ContainerState = CampaignCreateState;
