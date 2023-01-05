import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";

function ExpensesSummary({ periodName, expenses }) {
  const expenseSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 19,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});

export default ExpensesSummary;
