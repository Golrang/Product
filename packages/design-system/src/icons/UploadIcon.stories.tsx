import { StoryFn, Meta } from '@storybook/react';

import { ICUpload } from './UploadIcon';

export default {
  title: 'icons/UploadIcon',
  component: ICUpload,
} as Meta<typeof ICUpload>;

export const Primary = {
  args: { className: 'w-4 text-green-500' },
};
