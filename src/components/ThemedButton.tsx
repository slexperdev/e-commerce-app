import { colors } from '@/theme/colors';
import { FontFamily } from '@/theme/fonts';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const ThemedButton = ({name, style, icon, ...rest}: {name: string, style?: object, icon?: React.ReactNode} & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {icon}
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};
    
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: FontFamily.semiBold,
  },
});
