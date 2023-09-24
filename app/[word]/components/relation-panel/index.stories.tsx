import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { RelationPanel } from '.';

const relatedKeyword = {
  relatedKeywords: [
    {
      word: 'IT・ソフトウェア開発',
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

const meta = {
  title: 'App/Components/RelationPanel',
  component: RelationPanel,
  tags: ['autodocs'],
  argTypes: {
    relatedKeywords: {
      control: 'object',
      description: '関連語一覧要素',
    },
  },
} satisfies Meta<typeof RelationPanel>;

export default meta;
type Story = StoryObj<typeof RelationPanel>;

export const FirstStory: Story = {
  args: relatedKeyword,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await userEvent.hover(canvas.getByLabelText(/IT・ソフトウェア開発/));
    });
  },
};

export const SecondStory: Story = {
  args: relatedKeyword,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // const textElement = await canvas.getByLabelText('/他の人はこんな検索をしています/');
    // const textElement = await canvas.getByLabelText(/他の人はこんな検索をしています/);
    const textElement = await canvas.findByText(/他の人はこんな検索をしています/);
    expect(textElement).toBeInTheDocument();
  },
};
