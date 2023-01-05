import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("ManageExpenses", { expenseId: id })}
      style={({ pressed }) => pressed && { opacity: 0.6 }}
      //   android_ripple={{ color: " blue" }} muốn thêm hiệu ứng này thì phải cho nó có cái backgroundColor
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{date.toISOString().slice(0, 10)}</Text>
        </View>
        {/* phải có view ở đây để borerRadius trên ios */}
        <View style={styles.amount}>
          <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary400,
  },

  description: {
    color: GlobalStyles.colors.primary50,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
  },
  amount: {
    minWidth: 80,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
  amountText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: GlobalStyles.colors.primary500,
  },
});

export default ExpenseItem;
