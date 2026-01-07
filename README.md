# Bilibili Api Lib

> 一个简单的 Bilibili 网络请求封装库, 具体文档查看 [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect) 项目
> 我使用到的 api 才会进行封装. 



## API

### 视频 (Video)

- `api_getVideoInfo`: [获取视频详细信息(web端)](https://socialsisteryi.github.io/bilibili-API-collect/docs/video/info.html#%E8%8E%B7%E5%8F%96%E8%A7%86%E9%A2%91%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF-web%E7%AB%AF)

```ts
export declare function api_getVideoInfo(id: string | number, login?: boolean): Promise<IVideoInfo>;
```
