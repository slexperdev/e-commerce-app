import { colors } from "@/theme/colors"
import { FontFamily } from "@/theme/fonts"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

export const ThemedTextInput = ({...rest}: TextInputProps) =>{
    return(
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.placeholder}
          {...rest}
        />
    )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.input,
    color: colors.inputText,
    height: 52,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: FontFamily.regular,
    fontSize: 16,
  }
})