import { Meta, StoryObj } from '@storybook/react';
import { IncrementCount } from './IncrementCount';

const meta: Meta<typeof IncrementCount> = {
  title: 'features/IncrementCount',
  component: IncrementCount,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IncrementCount>;

export const Primary: Story = {};
