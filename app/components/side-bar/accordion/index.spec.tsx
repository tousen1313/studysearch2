/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';

import { createUrlWithParams } from '@/utils/link';

import { Accordion } from './';

describe('Accordion', () => {
  const subCategory = {
    title: 'test-title',
    urlParam: {
      keyword: 'test-keyword',
      area: 'test-area',
    },
    search1Url: 'test-search1Url',
    isNofollow: false,
    note: 'test-note',
    detailCategories: [
      {
        title: 'test-detail-title',
        urlParam: {
          keyword: 'test-keyword',
          area: 'test-area',
        },
        isNofollow: false,
        search1Url: 'test-search1Url',
      },
    ],
  };

  test('矢印アイコンをクリックすると、180度回転する', () => {
    const { getByTestId } = render(<Accordion subCategory={subCategory} />);
    const arrowIcon = getByTestId('tag-under-icon');
    // クリック前の状態を確認
    expect(arrowIcon).not.toHaveStyle(`transform: rotate(180deg)`);
    fireEvent.click(arrowIcon);
    // クリック後の状態を確認
    expect(arrowIcon).toHaveStyle(`transform: rotate(180deg)`);
  });

  test('詳細タイトル（note）が存在する場合、詳細タイトル（note）が正しく表示される', () => {
    const { detailCategories, ...subCategoryWithoutDetailCategories } = subCategory;
    render(<Accordion subCategory={subCategoryWithoutDetailCategories} />);
    expect(screen.getByText('test-note')).toBeInTheDocument();
  });

  test('TOPページにいる間、Search1用の外部リンク（aタグ）が配置される', () => {
    render(<Accordion subCategory={subCategory} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `${process.env.SEARCH1}/${subCategory.search1Url}`
    );
  });

  // TODO:createUrlWithParamsのモック化も必要かな（依存関係ができてしまっている）
  test('求人検索ページにいる間、Search2内の内部リンク（Linkタグ）が配置される', () => {
    const { search1Url, ...subCategoryWithoutSearch1Url } = subCategory;
    render(<Accordion subCategory={subCategoryWithoutSearch1Url} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `${createUrlWithParams(subCategory.urlParam)}`
    );
  });

  test('アコーディオンコンポーネントをクリックした場合、アコーディオンが開閉するかどうか', () => {
    const { getByTestId } = render(<Accordion subCategory={subCategory} />);
    const accordion = getByTestId('accordion');
    expect(accordion).toHaveClass('relative w-full');
    expect(accordion).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(accordion);
    expect(accordion).toHaveAttribute('aria-expanded', 'true');
  });
});
