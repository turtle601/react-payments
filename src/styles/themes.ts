import colors from '~/styles/colors';

const defaultThemeColor = {
  primary: '#DDF3F5',
  secondary: '#A6DCEF',
  spot: '#F2AAAA',
  danger: '#E3638',
};

const lightThemeColor = {
  ...defaultThemeColor,
  bgColor: colors.gray[50],
  textColor: colors.gray[700],
};

const darkThemeColor = {
  ...defaultThemeColor,
  bgColor: colors.gray[700],
  textColor: colors.gray[50],
};

export const darkTheme = {
  ...darkThemeColor,
};

export const lightTheme = {
  ...lightThemeColor,
};
