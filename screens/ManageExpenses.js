import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ErrorOverlay from "../components/ErrorOverlay/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";
import ExpressForm from "../components/ManageForm/ExpressForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constans/styles";
import {
  addExpenseFirebase,
  deleteExpenseFirebase,
  updateExpenseFirebase,
} from "../http";
import { addExpense, updateExpense, deleteExpense } from "../store/expenses";

function ManageExpenses({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const listExpenses = useSelector((state) => state.expenses.expenseState);
  const [submit, setSubmit] = useState(false);
  const [occur, setOccur] = useState(false);

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

  const handleData = async (data) => {
    try {
      setSubmit(true);
      if (expenseId) {
        await updateExpenseFirebase(expenseId, data);
        dispatch(
          updateExpense({
            id: expenseId,
            data,
          })
        );
      } else {
        const id = await addExpenseFirebase(data);
        dispatch(
          addExpense({
            id: id.name,
            ...data,
          })
        );
      }
      navigation.goBack();
    } catch (error) {
      setSubmit(false);
      setOccur(true);
    }
  };

  const handleDelete = async () => {
    try {
      setSubmit(true);
      await deleteExpenseFirebase(expenseId);
      dispatch(deleteExpense(expenseId));
      navigation.goBack();
    } catch (error) {
      setSubmit(false);
      setOccur(true);
    }
  };

  const cancelHandle = () => {
    navigation.goBack();
  };

  if (submit) return <LoadingOverlay />;
  if (occur) return <ErrorOverlay />;
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
