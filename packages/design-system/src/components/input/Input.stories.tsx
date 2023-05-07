import { StoryFn, Meta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<typeof Input>;

export const Default = {
  args: {},
};

export const Label = {};
