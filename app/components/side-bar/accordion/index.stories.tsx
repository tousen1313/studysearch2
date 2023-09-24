import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './';

const meta = {
  title: 'App/Components/SideBar/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    subCategory: {
      control: 'object',
      description: 'アコーディオンのサブカテゴリーのオブジェクト要素になります。',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    subCategory: {
      title: '会社の特徴',
      urlParam: {},
      note: '上場企業、官公庁・学校関連 他',
      isNofollow: false,
      detailCategories: [
        {
          title: '上場企業',
          urlParam: {
            feature: '上場企業',
          },
          isNofollow: false,
          search1Url: 'feature/jojo-kigyo/',
        },
        {
          title: '官公庁・学校関連',
          urlParam: {
            feature: '官公庁・学校関連',
          },
          isNofollow: false,
          search1Url: 'feature/kankocho-gakko/',
        },
        {
          title: 'ベンチャー企業',
          urlParam: {
            feature: 'ベンチャー企業',
          },
          isNofollow: false,
          search1Url: 'feature/venture-kigyo/',
        },
        {
          title: '外資系企業',
          urlParam: {
            feature: '外資系企業',
          },
          isNofollow: false,
          search1Url: 'feature/gaishikei-kigyo/',
        },
        {
          title: '株式公開準備中',
          urlParam: {
            feature: '株式公開準備中',
          },
          isNofollow: false,
          search1Url: 'feature/kabushiki-kokai-jumbi/',
        },
        {
          title: '設立30年以上',
          urlParam: {
            feature: '設立30年以上',
          },
          isNofollow: false,
          search1Url: 'feature/setsuritsu30nen/',
        },
        {
          title: '女性管理職登用実績あり',
          urlParam: {
            feature: '女性管理職登用実績あり',
          },
          isNofollow: false,
          search1Url: 'feature/josei-kanrishoku-toyo/',
        },
        {
          title: '駅から徒歩5分以内',
          urlParam: {
            feature: '駅から徒歩5分以内',
          },
          isNofollow: false,
          search1Url: 'feature/eki-toho5fun/',
        },
        {
          title: '転勤なし',
          urlParam: {
            feature: '転勤なし',
          },
          isNofollow: false,
          search1Url: 'feature/tenkin-nashi/',
        },
      ],
    },
  },
};
