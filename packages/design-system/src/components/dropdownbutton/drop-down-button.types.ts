import { DropdownButtonProps } from "antd/lib/dropdown";
import { ReactNode } from "react";

export type TDropdownButton = {
  name: string;
  label?: ReactNode;
} & Omit<DropdownButtonProps, "overlay">;
