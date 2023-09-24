import type { UrlParamType } from '@/types';

export const createUrlWithParams = (urlParam: UrlParamType) => {
  if (!urlParam) return '';
  const params = Object.entries(urlParam)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return `/求人?${params}`;
};

export const getNofollowAttribute = (isNofollow: boolean): string | undefined => {
  return isNofollow ? 'nofollow' : undefined;
};
