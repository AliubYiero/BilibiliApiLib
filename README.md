# Bilibili Api Lib

> 一个简单的 Bilibili 网络请求封装库, 具体文档查看 [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) 项目
> 我使用到的 api 才会进行封装. 



## API

### 视频 (Video)

- `api_getUserUploadVideoList`: [根据关键词查找视频](https://socialsisteryi.github.io/bilibili-API-collect/docs/video/collection.html#%E6%A0%B9%E6%8D%AE%E5%85%B3%E9%94%AE%E8%AF%8D%E6%9F%A5%E6%89%BE%E8%A7%86%E9%A2%91)

```ts
export declare function api_getUserUploadVideoList(uid: number, page?: number, pageSize?: number): Promise<import("../xhrRequest.ts").XhrResponse<IUserUploadVideo>>;
```

- `api_getVideoInfo`: [获取视频详细信息(web端)](https://socialsisteryi.github.io/bilibili-API-collect/docs/video/info.html#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF-web%E7%AB%AF)

```ts
export declare function api_getVideoInfo(id: string | number, login?: boolean): Promise<IVideoInfo>;
```

### 合集 (Season)

- `api_getSeasonInfo`: 获取合集内的小节信息

```ts
export declare function api_getSeasonInfo(seasonId: number): Promise<ISeasonInfo>;
```

- `api_getSeasonSectionInfo`: [获取合集小节中的视频信息](https://socialsisteryi.github.io/bilibili-API-collect/docs/creativecenter/season.html#%E8%8E%B7%E5%8F%96%E5%90%88%E9%9B%86%E5%B0%8F%E8%8A%82%E4%B8%AD%E7%9A%84%E8%A7%86%E9%A2%91)

```ts
export declare function api_getSeasonSectionInfo(sectionId: number): Promise<ISeasonSectionInfo>;
```

- `api_editSeason`: [编辑合集信息](https://socialsisteryi.github.io/bilibili-API-collect/docs/creativecenter/season.html#%E7%BC%96%E8%BE%91%E5%90%88%E9%9B%86%E4%BF%A1%E6%81%AF)

```ts
export declare function api_editSeason(season: IEditSeasonBody['season'], sorts: IEditSeasonBody['sorts']): Promise<import("../xhrRequest.ts").XhrResponse<undefined>>;
```

- `api_editSeasonSection`: [编辑合集小节](https://socialsisteryi.github.io/bilibili-API-collect/docs/creativecenter/season.html#%E7%BC%96%E8%BE%91%E5%90%88%E9%9B%86%E5%B0%8F%E8%8A%82)

```ts
export declare function api_editSeasonSection(section: IEditSeasonSectionBody['section'], sorts: IEditSeasonSectionBody['sorts']): Promise<import("../xhrRequest.ts").XhrResponse<undefined>>;
```

