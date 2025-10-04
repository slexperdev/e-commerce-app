import { StyleSheet, Text, type TextProps } from 'react-native';

import { FontFamily } from '@/theme/fonts';
import { colors } from '@/theme/colors';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'small'
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'caption'
    | 'medium';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        {color: colors.text},
        type === 'small' ? styles.small : undefined,
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'caption' ? styles.caption : undefined,
        type === 'medium' ? styles.medium : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: FontFamily.regular,
  },
  medium: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FontFamily.medium,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontFamily.regular,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontFamily.semiBold,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: FontFamily.bold,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'semibold',
    fontFamily: FontFamily.semiBold,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    fontFamily: FontFamily.regular,
  },
  caption: {
    color: '#84939A',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: FontFamily.regular,
  },
});
