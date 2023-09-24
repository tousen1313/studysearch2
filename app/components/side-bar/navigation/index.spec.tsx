/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@testing-library/react';

import { createUrlWithParams } from '@/utils/link';

import { Navigation } from '.';

describe('Navigation', () => {
  const subCategory = {
    title: 'test-title',
    urlParam: {
      keyword: 'test-keyword',
      area: 'test-area',
    },
    search1Url: 'test-search1Url',
    isNofollow: false,
    note: 'test-note',
  };

  test('TOPページにいる間、Search1用の外部リンク（aタグ）が配置される', () => {
    render(<Navigation subCategory={subCategory} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `${process.env.SEARCH1}/${subCategory.search1Url}`
    );
  });

  // TODO:createUrlWithParamsのモック化も必要かな（依存関係ができてしまっている）
  test('求人検索ページにいる間、Search2内の内部リンク（Linkタグ）が配置される', () => {
    const { search1Url, ...subCategoryWithoutSearch1Url } = subCategory;
    render(<Navigation subCategory={subCategoryWithoutSearch1Url} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `${createUrlWithParams(subCategory.urlParam)}`
    );
  });

  test('詳細タイトル（note）が存在する場合、詳細タイトル（note）が正しく表示される', () => {
    render(<Navigation subCategory={subCategory} />);
    expect(screen.getByText('test-note')).toBeInTheDocument();
  });
});
