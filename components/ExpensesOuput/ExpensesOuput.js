import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOuput({ name, expenses, fallBack }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={name} expenses={expenses} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.fallBackText}>{fallBack}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems : "center", nếu đề bằng center ở đây thì sẽ mất đi cái mặc định là stretch
    // cái thuộc tính này tự kéo dài hết chiều ngang
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallBackText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 32,
    color: GlobalStyles.colors.primary100,
  },
});
export default ExpensesOuput;
