export interface IVideoInfo {
	bvid?: string;
	aid?: number;
	videos?: number;
	tid?: number;
	tid_v2?: number;
	tname?: string;
	tname_v2?: string;
	copyright?: number;
	pic?: string;
	title?: string;
	pubdate?: number;
	ctime?: number;
	desc?: string;
	desc_v2?: DescV2[];
	state?: number;
	duration?: number;
	rights?: Rights;
	owner?: Owner;
	stat?: Stat;
	argue_info?: ArgueInfo;
	dynamic?: string;
	cid?: number;
	dimension?: Dimension;
	season_id?: number;
	premiere?: any;
	teenage_mode?: number;
	is_chargeable_season?: boolean;
	is_story?: boolean;
	is_upower_exclusive?: boolean;
	is_upower_play?: boolean;
	is_upower_preview?: boolean;
	enable_vt?: number;
	vt_display?: string;
	is_upower_exclusive_with_qa?: boolean;
	no_cache?: boolean;
	pages?: Pages[];
	subtitle?: Subtitle;
	ugc_season?: UgcSeason;
	is_season_display?: boolean;
	user_garb?: UserGarb;
	like_icon?: string;
	need_jump_bv?: boolean;
	disable_show_up_info?: boolean;
	is_story_play?: number;
	is_view_self?: boolean;
}

export interface Rights {
	bp?: number;
	elec?: number;
	download?: number;
	movie?: number;
	pay?: number;
	hd5?: number;
	no_reprint?: number;
	autoplay?: number;
	ugc_pay?: number;
	is_cooperation?: number;
	ugc_pay_preview?: number;
	no_background?: number;
	clean_mode?: number;
	is_stein_gate?: number;
	is_360?: number;
	no_share?: number;
	arc_pay?: number;
	free_watch?: number;
}

export interface Owner {
	mid?: number;
	name?: string;
	face?: string;
}

export interface Stat {
	aid?: number;
	view?: number;
	danmaku?: number;
	reply?: number;
	favorite?: number;
	coin?: number;
	share?: number;
	now_rank?: number;
	his_rank?: number;
	like?: number;
	dislike?: number;
	evaluation?: string;
	vt?: number;
}

export interface ArgueInfo {
	argue_msg?: string;
	argue_type?: number;
	argue_link?: string;
}

export interface Dimension {
	width?: number;
	height?: number;
	rotate?: number;
}

export interface Subtitle {
	allow_submit?: boolean;
}

export interface UgcSeason {
	id?: number;
	title?: string;
	cover?: string;
	mid?: number;
	intro?: string;
	sign_state?: number;
	attribute?: number;
	sections?: Sections[];
	stat?: Stat;
	ep_count?: number;
	season_type?: number;
	is_pay_season?: boolean;
	enable_vt?: number;
}

export interface Stat {
	season_id?: number;
	view?: number;
	danmaku?: number;
	reply?: number;
	fav?: number;
	coin?: number;
	share?: number;
	now_rank?: number;
	his_rank?: number;
	like?: number;
	vt?: number;
	vv?: number;
}

export interface Sections {
	season_id?: number;
	id?: number;
	title?: string;
	type?: number;
	episodes?: Episodes[];
}

export interface Episodes {
	season_id?: number;
	section_id?: number;
	id?: number;
	aid?: number;
	cid?: number;
	title?: string;
	attribute?: number;
	arc?: Arc;
	page?: Page;
	bvid?: string;
	pages?: Pages[];
}

export interface Arc {
	aid?: number;
	videos?: number;
	type_id?: number;
	type_name?: string;
	copyright?: number;
	pic?: string;
	title?: string;
	pubdate?: number;
	ctime?: number;
	desc?: string;
	state?: number;
	duration?: number;
	rights?: Rights;
	author?: Author;
	stat?: Stat;
	dynamic?: string;
	dimension?: Dimension;
	desc_v2?: any;
	is_chargeable_season?: boolean;
	is_blooper?: boolean;
	enable_vt?: number;
	vt_display?: string;
	type_id_v2?: number;
	type_name_v2?: string;
	is_lesson_video?: number;
}

export interface Rights {
	bp?: number;
	elec?: number;
	download?: number;
	movie?: number;
	pay?: number;
	hd5?: number;
	no_reprint?: number;
	autoplay?: number;
	ugc_pay?: number;
	is_cooperation?: number;
	ugc_pay_preview?: number;
	arc_pay?: number;
	free_watch?: number;
}

export interface Author {
	mid?: number;
	name?: string;
	face?: string;
}

export interface Stat {
	aid?: number;
	view?: number;
	danmaku?: number;
	reply?: number;
	fav?: number;
	coin?: number;
	share?: number;
	now_rank?: number;
	his_rank?: number;
	like?: number;
	dislike?: number;
	evaluation?: string;
	argue_msg?: string;
	vt?: number;
	vv?: number;
}

export interface Page {
	cid?: number;
	page?: number;
	from?: string;
	part?: string;
	duration?: number;
	vid?: string;
	weblink?: string;
	dimension?: Dimension;
}

export interface Pages {
	cid?: number;
	page?: number;
	from?: string;
	part?: string;
	duration?: number;
	vid?: string;
	weblink?: string;
	dimension?: Dimension;
}

export interface UserGarb {
	url_image_ani_cut?: string;
}

export interface DescV2 {
	raw_text?: string;
	type?: number;
	biz_id?: number;
}

export interface Pages {
	cid?: number;
	page?: number;
	from?: string;
	part?: string;
	duration?: number;
	vid?: string;
	weblink?: string;
	dimension?: Dimension;
	first_frame?: string;
	ctime?: number;
}
