import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './';

const meta = {
  title: 'App/Components/SideBar/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {
    subCategory: {
      control: 'object',
      description: 'ナビゲーションのサブカテゴリーのオブジェクト要素になります。',
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    subCategory: {
      title: '営業系',
      urlParam: {
        occupation: '営業系',
      },
      note: '営業、MR、人材コーディネーター 他',
      isNofollow: false,
      search1Url: 'job/sales/',
    },
  },
};
