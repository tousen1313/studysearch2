import type { RelatedKeywordResourceType } from '@/types';
import { render, screen } from '@testing-library/react';

import { createUrlWithParams } from '@/utils/link';

import { RelationPanel } from './';

describe('RelationPanel', () => {
  const relatedKeyword: RelatedKeywordResourceType = {
    relatedKeywords: [
      {
        word: 'IT・ソフトウェア開発 グラフィックデザイナー',
        urlParam: { keyword: 'IT・ソフトウェア開発' },
        isNofollow: false,
      },
      {
        word: '医療・看護・介護',
        urlParam: { keyword: '医療・看護・介護' },
        isNofollow: false,
      },
      {
        word: '営業・販売・マーケティング',
        urlParam: { keyword: '営業・販売・マーケティング' },
        isNofollow: false,
      },
    ],
  };

  // test('タグアイコンとタイトルの表示', () => {
  //   render(<RelationPanel relatedKeywords={relatedKeyword.relatedKeywords} />);
  //   expect(screen.getByTestId('title-tag-left-icon')).toBeInTheDocument();
  //   expect(screen.getByRole('heading', { name: /求人検索/ })).toBeInTheDocument();
  // });
  test('軸キーワードの数だけリンクとアイコンが表示される', () => {
    render(<RelationPanel relatedKeywords={relatedKeyword.relatedKeywords} />);
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getAllByTestId('relatedKeyword-tag-left-icon')).toHaveLength(3);
  });
  test('軸キーワードに紐づいたリンクが表示される', () => {
    render(<RelationPanel relatedKeywords={relatedKeyword.relatedKeywords} />);
    const linkElements = screen.getAllByRole('link');
    relatedKeyword.relatedKeywords.forEach((entity, index) => {
      expect(linkElements[index]).toHaveAttribute(
        'href',
        `${createUrlWithParams(entity.urlParam)}`
      );
    });
  });
});
