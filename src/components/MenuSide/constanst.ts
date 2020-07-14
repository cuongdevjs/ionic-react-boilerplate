import {
	bookmarkOutline,
	createOutline,
	newspaperOutline,
	callOutline,
	settingsOutline,
	medalOutline,
	homeOutline,
} from "ionicons/icons";

export const LIST_MENU_ITEM = [
	{
		icon: homeOutline,
		href: "/home",
		label: "Trang chủ",
	},
	{
		icon: bookmarkOutline,
		href: "/campaign",
		label: "Chiến dịch",
	},
	{
		icon: createOutline,
		href: "/campaign/create",
		label: "Tạo chiến dịch",
	},
	{
		icon: newspaperOutline,
		href: "/news",
		label: "Tin tức",
	},
	{
		icon: settingsOutline,
		href: "/support",
		label: "Hỗ trợ",
	},
	{
		icon: callOutline,
		href: "/contact",
		label: "Liên hệ",
	},
	{
		icon: medalOutline,
		href: "/about",
		label: "Về Yoolove",
	},
];
