import { useSelector } from "react-redux";
import ErrorOverlay from "../components/ErrorOverlay/ErrorOverlay";
import ExpensesOuput from "../components/ExpensesOuput/ExpensesOuput";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";

function AllExpenses() {
  const { expenseState, loading, error } = useSelector(
    (state) => state.expenses
  );

  if (loading) return <LoadingOverlay />;
  if (error) return <ErrorOverlay />;

  return (
    <ExpensesOuput
      name="Total Expenses"
      expenses={expenseState}
      fallBack="No registered expenes found !!"
    />
  );
}

export default AllExpenses;
