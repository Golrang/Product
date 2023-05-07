import { Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

export const Default = {
  args: {
    name: "button",
    children: "submit",
    type: "primary",
    htmlType: "submit",
    size: "middle",
    shape: "round",
  },
};
