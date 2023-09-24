import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '.';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: '現在のページ',
    },
    lastPage: {
      control: 'number',
      description: '最後のページ',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/[word]',
      },
    },
  },
  args: {
    currentPage: 5,
    lastPage: 10,
  },
};
