import { createUrlWithParams, getNofollowAttribute } from '@/utils/link';

describe('createUrlWithParams', () => {
  it('urlParamがundefinedのときに空を返す', () => {
    expect(createUrlWithParams(undefined)).toBe('');
  });

  it('urlParamがローマ字で定義されているときに条件に合ったURLを返す', () => {
    const urlParam = {
      keyword: 'web-engineer',
      area: 'tokyo',
    };
    expect(createUrlWithParams(urlParam)).toBe('/求人?keyword=web-engineer&area=tokyo');
  });

  it('urlParamが日本語で定義されているときにエンコードされたもので条件に合ったURLを返す', () => {
    const urlParam = {
      keyword: 'Webエンジニア',
      area: '東京都',
    };
    expect(createUrlWithParams(urlParam)).toBe(
      '/求人?keyword=Web%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2&area=%E6%9D%B1%E4%BA%AC%E9%83%BD'
    );
  });
});

describe('getNofollowAttribute', () => {
  it('isNofollowがfalseのときにundefinedを返す', () => {
    expect(getNofollowAttribute(false)).toBeUndefined();
  });

  it('isNofollowがtrueのときにnofollowを返す', () => {
    expect(getNofollowAttribute(true)).toBe('nofollow');
  });
});
