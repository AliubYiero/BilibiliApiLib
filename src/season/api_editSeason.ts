import { xhrRequest } from '../xhrRequest.ts';
import { IEditSeasonBody } from './interface/IEditSeason.ts';

/**
 * 编辑合集信息
 *
 * @see [编辑合集信息](https://socialsisteryi.github.io/bilibili-API-collect/docs/creativecenter/season.html#%E7%BC%96%E8%BE%91%E5%90%88%E9%9B%86%E4%BF%A1%E6%81%AF)
 */
export async function api_editSeason(
	season: IEditSeasonBody['season'],
	sorts: IEditSeasonBody['sorts'],
) {
	const csrfCookie = await cookieStore.get( 'bili_jct' );
	if ( !csrfCookie || !csrfCookie.value ) {
		throw new NotLoginError();
	}
	return xhrRequest.postWithCredentials<undefined>( 'https://member.bilibili.com/x2/creative/web/season/edit', {
		params: {
			csrf: csrfCookie.value,
		},
		body: {
			season,
			sorts,
		},
	} );
}
