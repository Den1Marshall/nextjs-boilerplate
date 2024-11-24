import type { Meta, StoryObj } from '@storybook/react';
import { Count } from './Count';

const meta: Meta<typeof Count> = {
  title: 'entities/Count',
  component: Count,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Count>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Element that renders paragraph with count',
      },
    },
  },

  args: {
    count: 0,
  },
};
