import { StoryFn, Meta } from '@storybook/react';
import { TDropdownButton } from './drop-down-button.types';
import { DropdownButton } from './DropdownButton';

export default {
  title: 'Components/DropdownButton',
  component: DropdownButton,
} as Meta<typeof DropdownButton>;

export const Default = {
  args: {
    label: 'DropdownButton',
    // children: [
    //   { key: 1, label: "Yes" },
    //   { key: 2, label: "No" },
    // ],
  },
};
