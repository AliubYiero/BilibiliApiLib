export interface ownerItem {
	face: string;
	name: string;
	mid: number;
}

export interface statItem {
	now_rank: number;
	like: number;
	dislike: number;
	his_rank: number;
	evaluation: string;
	view: number;
	danmaku: number;
	share: number;
	reply: number;
	aid: number;
	favorite: number;
	vt: number;
	coin: number;
}

export interface argue_infoItem {
	argue_msg: string;
	argue_link: string;
	argue_type: number;
}

export interface pagesItem {
	duration: number;
	vid: string;
	part: string;
	weblink: string;
	ctime: number;
	from: string;
	page: number;
	dimension: dimensionItem;
	cid: number;
	first_frame: string;
}

export interface IVideoInfo {
	bvid: string;
	copyright: number;
	argue_info: argue_infoItem;
	is_upower_play: boolean;
	tid_v2: number;
	is_chargeable_season: boolean;
	is_view_self: boolean;
	user_garb: user_garbItem;
	is_story_play: number;
	videos: number;
	pic: string;
	title: string;
	is_upower_exclusive_with_qa: boolean;
	tid: number;
	is_story: boolean;
	duration: number;
	vt_display: string;
	pages: Array<pagesItem>;
	no_cache: boolean;
	tname_v2: string;
	rights: rightsItem;
	need_jump_bv: boolean;
	ctime: number;
	dynamic: string;
	state: number;
	like_icon: string;
	dimension: dimensionItem;
	is_upower_preview: boolean;
	pubdate: number;
	owner: ownerItem;
	desc_v2: any;
	is_upower_exclusive: boolean;
	stat: statItem;
	enable_vt: number;
	tname: string;
	is_season_display: boolean;
	teenage_mode: number;
	premiere: any;
	honor_reply: honor_replyItem;
	subtitle: Array<subtitleItem>;
	aid: number;
	desc: string;
	cid: number;
	disable_show_up_info: boolean;
}

export interface authorItem {
	birthday: number;
	sex: string;
	name_render: any;
	sign: string;
	in_reg_audit: number;
	mid: number;
	handle: string;
	face: string;
	is_deleted: number;
	name: string;
	rank: number;
	is_senior_member: number;
	is_fake_account: number;
}

export interface honor_replyItem {
}

export interface rightsItem {
	clean_mode: number;
	free_watch: number;
	movie: number;
	is_cooperation: number;
	ugc_pay: number;
	no_background: number;
	pay: number;
	elec: number;
	ugc_pay_preview: number;
	bp: number;
	autoplay: number;
	download: number;
	no_reprint: number;
	is_360: number;
	no_share: number;
	hd5: number;
	is_stein_gate: number;
	arc_pay: number;
}

export interface subtitleItem {
	allow_submit: boolean;
	list: Array<listItem>;
}

export interface user_garbItem {
	url_image_ani_cut: string;
}

export interface listItem {
	subtitle_url: string;
	lan_doc: string;
	author: authorItem;
	id_str: string;
	lan: string;
	is_lock: boolean;
	subtitle_height: any;
	id: number;
	ai_type: number;
	type: number;
	ai_status: number;
}

export interface dimensionItem {
	rotate: number;
	width: number;
	height: number;
}
