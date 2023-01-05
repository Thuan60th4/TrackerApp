import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function Input({ label, style, isValid, ...textInputProps }) {
  return (
    <View style={[styles.conatiner, style]}>
      <Text style={[styles.label, !isValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          textInputProps.multiline && styles.inputMultiline,
          !isValid && styles.invalidInput,
        ]}
        {...textInputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    marginVertical: 10,
    marginHorizontal: 8,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 16,
    marginBottom: 6,
  },
  invalidLabel: {
    color: 'red',
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 10,
    borderRadius: 8,
    fontSize: 19,
  },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 2,
  },
  inputMultiline: {
    minHeight: 100,
    // textAlight này nên dùng để căn cho con trỏ ở trên đầu cho cả 2 nền tảng
    textAlignVertical: "top",
  },
});

export default Input;
