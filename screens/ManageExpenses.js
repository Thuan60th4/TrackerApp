import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ExpressForm from "../components/ManageForm/ExpressForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constans/styles";
import { addExpense, updateExpense, deleteExpense } from "../store/expenses";

function ManageExpenses({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const listExpenses = useSelector((state) => state.expenses.expenseState);
  const dispatch = useDispatch();

  let currentValueUpdate = listExpenses.find(
    (expense) => expense.id == expenseId
  );
  useLayoutEffect(() => {
    if (expenseId) {
      navigation.setOptions({
        title: "Edit Expense",
      });
    } else {
      navigation.setOptions({
        title: "Add Expense",
      });
    }
  }, []);

  const handleData = (data) => {
    if (expenseId) {
      dispatch(
        updateExpense({
          id: expenseId,
          data,
        })
      );
    } else {
      dispatch(
        addExpense({
          id: Math.random().toString(),
          ...data,
        })
      );
    }
    navigation.goBack();
  };

  const handleDelete = () => {
    dispatch(deleteExpense(expenseId));
    navigation.goBack();
  };

  const cancelHandle = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ExpressForm
        handleData={handleData}
        cancelHandle={cancelHandle}
        expenseId={expenseId}
        currentValueUpdate={currentValueUpdate}
      />
      {expenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color="red"
            size={39}
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 10,
  },

  deleteContainer: {
    alignItems: "center",
    marginTop: 15,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});

export default ManageExpenses;
