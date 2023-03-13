import { ConfigProvider as AntConfigProvider, theme, ThemeConfig } from "antd";

import { ConfigProviderProps } from "antd/lib/config-provider";

export type TConfigProvider = ConfigProviderProps;

const token = theme.defaultConfig.token;

const defaultTheme: ThemeConfig = {
  ...theme,
  token: {
    ...token,
    fontFamily: "IRANSansFaNum",
  },
};
export const ConfigProvider = ({ theme, ...rest }: TConfigProvider) => {
  if (theme) {
    if (theme.token) {
      theme.token.fontFamily = "IRANSansFaNum";
    }
  }

  const generatedTheme = theme || defaultTheme;
  return <AntConfigProvider theme={generatedTheme} {...rest} />;
};
