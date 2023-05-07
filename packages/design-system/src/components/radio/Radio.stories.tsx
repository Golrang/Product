import { StoryFn, Meta } from "@storybook/react";
import { Radio } from "./Radio";
import { TRadio } from "./radio.types";

export default {
  title: "Components/Radio",
  component: Radio,
} as Meta<typeof Radio>;

export const Default = {
  args: {
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
    ],
  },
};

export const Disable = {
  args: {
    options: [
      { value: "1", label: "Option a" },
      { value: "2", label: "Option a" },
      { value: "3", label: "Option c", disabled: true },
    ],
  },
};
