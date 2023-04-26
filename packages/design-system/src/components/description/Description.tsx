import { forwardRef } from "react";
import { Descriptions as AntDescriptions } from "antd";
import { TDescription } from "./description.types";
import { DescriptionsItemProps } from "antd/es/descriptions/Item";

const Descriptions = forwardRef(({ ...rest }: TDescription, ref?: any) => (
  <AntDescriptions {...rest} {...{ ref }} />
));

const DescriptionsItem: React.FC<DescriptionsItemProps> = AntDescriptions.Item;
export { Descriptions, DescriptionsItem };
