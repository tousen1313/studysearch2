import type { Meta, StoryObj } from '@storybook/react';
import { objectToCamel } from 'ts-case-convert';

import { JobPanel } from '.';

const worksData = {
  works: [
    {
      work_id: '104326',
      is_paid_publication: true,
      is_new: true,
      elapsed_days_text: '',
      int_elapsed_days: 0,
      update_datetime: '2023-08-01',
      title: 'スタッフ募集1！',
      employment_status: '中途採用(正社員)',
      recruitment_features: ['未経験OK', '10名以上の大量募集', '急募！内定まで2週間'],
      office_list: [
        {
          area_remote: '104336',
          area_main: '福岡県',
          area_secondary: '博多区',
        },
      ],
      working_time: 'シフト制',
      working_time_features: ['残業なし', '完全土日休み', '1日4g以内OK'],
      salary: '時給 855円〜1,200円',
      salary_note:
        '◆交通費支給(規定有)◆扶養内勤務OK★3ヶ月毎に昇給のチャンスあり！★アポイントがなかなか取れなくても真面目に頑張ってくれる人には還元していきたい。なので当社の評価のポイントはアポイント獲得数だけでなく在籍年数、架電件数、勤務態度など総合的に評価し給与に反映します。実際、8割のスタッフが昇給しています！★友達紹介キャンペーン★お知り合いが入社されると、その方が勤続中はずーっと時給10円UP！★未経験入社6年目　主婦Aさん★＜月収例／10万3200円＞・連続勤務　基本給100円UP・実績(人事評価制度)　120円UP⇒時給1075円、1日6ｈ勤務×16日（週4日程度）★未経験入社4年目　主婦Bさん★＜月収例／10万9920円＞・連続勤務　基本給50円UP・実績(人事評価制度)　240円UP⇒時給1145円、1日6ｈ勤務×16日（週4日程度）',
      image_url: 'https://image.en-gage.net/image/panel/305001/main_panel_0000305582.jpg',
      url: 'https://en-gage.net/user/search/desc/5390129/?aroute=1602&ppw=1',
      work_es_site_review_flg: true,
      tsr_id: 0,
      company_name: 'エンジャパン株式会社',
      hyoban_score_total: 3.5,
      kuchikomi_count: 45,
      hyoban_url: '/',
      cached_datetime: '2023-08-01',
    },
  ],
};

const works = objectToCamel(worksData);

const meta = {
  title: 'Components/JobPanel',
  component: JobPanel,
  tags: ['autodocs'],
  argTypes: {
    works: [
      {
        title: {
          control: 'string',
          description: 'タイトル',
        },
        employmentStatus: {
          control: 'string',
          description: '雇用形態',
        },
        recruitmentFeatures: {
          control: 'array',
          description: '応募資格系（募集の特徴）',
        },
        officeList: {
          control: 'array',
          description: '勤務地',
        },
        salary: {
          control: 'string',
          description: '給与',
        },
        salaryNote: {
          control: 'string',
          description: '給与',
        },
        imageUrl: {
          control: 'string',
          description: '画像URL',
        },
        url: {
          control: 'string',
          description: '求人詳細のリンク',
        },
        hyobanScoreTotal: {
          control: 'integer',
          description: '評判スコア',
        },
        hyobanUrl: {
          control: 'string',
          description: '評判リンク',
        },
      },
    ],
  },
} satisfies Meta<typeof JobPanel>;

export default meta;
type Story = StoryObj<typeof JobPanel>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/[word]',
      },
    },
  },
  args: { ...works },
};
