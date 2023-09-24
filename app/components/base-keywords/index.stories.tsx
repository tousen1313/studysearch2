import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { BaseKeywords } from '.';

const meta = {
  title: 'App/Components/BaseKeywords',
  component: BaseKeywords,
  tags: ['autodocs'],
  argTypes: {
    keywords: {
      control: 'object',
      description: '軸キーワードになります。最大で50件表示します。',
    },
  },
} satisfies Meta<typeof BaseKeywords>;

export default meta;
type Story = StoryObj<typeof BaseKeywords>;

export const Default: Story = {
  args: {
    keywords: [
      '北海道-札幌市-中央区×アパレル',
      '動画編集-北海道',
      'データ入力',
      'アパレル',
      '英語',
      '一般事務',
      'フルリモート',
      '在宅勤務',
      '短期',
      '調剤薬局事務',
      '通販',
      '転勤なし',
      '動画制作',
      '新規事業',
      '内職',
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textElement = await canvas.findByText(/求人検索/);

    expect(textElement).toBeInTheDocument();
  },
};
