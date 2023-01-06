import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorOverlay from "../components/ErrorOverlay/ErrorOverlay";
import ExpensesOuput from "../components/ExpensesOuput/ExpensesOuput";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";
import { getExpenseFirebase } from "../http";
import { setInitState, setLoading, setError } from "../store/expenses";

function RecentExpenses() {
  const { expenseState, loading, error } = useSelector(
    (state) => state.expenses
  );

  const dispatch = useDispatch();

  const date = new Date();
  date.setDate(date.getDate() - 7);
  const expensesCond = new Date(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  );
  const expensesListCond = expenseState.filter(
    (expense) => expense.date >= expensesCond
  );

  useEffect(() => {
    async function getExpenses() {
      try {
        const listExpensesFirebase = [];
        const result = await getExpenseFirebase();
        dispatch(setLoading(false));
        for (const key in result) {
          listExpensesFirebase.unshift({
            id: key,
            description: result[key].description,
            amount: result[key].amount,
            date: new Date(result[key].date),
          });
        }
        dispatch(setInitState(listExpensesFirebase));
      } catch (error) {
        dispatch(setLoading(false));
        dispatch(setError(true));
      }
    }
    getExpenses();
  }, []);

  if (loading) return <LoadingOverlay />;
  if (error) return <ErrorOverlay />;
  return (
    <ExpensesOuput
      name="Last 7 Days Expenses"
      expenses={expensesListCond}
      fallBack="No registered expenes found for the last 7 days !!"
    />
  );
}

export default RecentExpenses;
