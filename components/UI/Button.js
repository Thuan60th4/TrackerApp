import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function Button({ style, onPress, transparent, children }) {
  return (
    <View style={[styles.container, transparent && styles.transparent, style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed && Platform.OS == "ios" && styles.pressed
        }
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary400,
    overflow: "hidden",
    borderRadius: 6,
  },

  buttonText: {
    color: GlobalStyles.colors.primary50,
    textAlign: "center",
    fontSize: 19,
    padding: 10,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary200,
  },

  transparent: {
    backgroundColor: "transparent",
  },
});

export default Button;
