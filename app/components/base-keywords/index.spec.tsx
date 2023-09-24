import { render, screen } from '@testing-library/react';

import { BaseKeywords } from './';

describe('BaseKeywords', () => {
  const keywords = ['アパレル', '動画編集'];

  test('タグアイコンとタイトルの表示', () => {
    render(<BaseKeywords keywords={keywords} />);
    expect(screen.getByTestId('title-tag-left-icon')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /求人検索/ })).toBeInTheDocument();
  });
  test('軸キーワードの数だけリンクとアイコンが表示される', () => {
    render(<BaseKeywords keywords={keywords} />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getAllByTestId('keyword-tag-left-icon')).toHaveLength(2);
  });
  test('軸キーワードに紐づいたリンクが表示される', () => {
    render(<BaseKeywords keywords={keywords} />);
    const linkElements = screen.getAllByRole('link');
    keywords.forEach((keyword, index) => {
      expect(linkElements[index]).toHaveAttribute('href', `/求人?keyword=${keyword}`);
    });
  });
});
