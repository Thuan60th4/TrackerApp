import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function ErrorOverlay() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>An Error Occurred!</Text>
      <Text style={styles.text}>Please try again later</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  textTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ErrorOverlay;
