import { xhrRequest } from '../xhrRequest.ts';
import { ISubtitleInfo } from './interfaces/ISubtitleInfo.ts';

/**
 * 获取字幕文件内容
 *
 * 只能获取 subtitle_url 字段, 在 hdslb.com 域名下的字幕.
 * 无法获取 subtitle_url_v2 字段的内容.
 *
 */
export function api_getSubtitleContent( url: string ) {
	return xhrRequest.get( url ) as unknown as Promise<ISubtitleInfo>;
}
