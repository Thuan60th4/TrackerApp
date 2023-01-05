import { useSelector } from "react-redux";
import ExpensesOuput from "../components/ExpensesOuput/ExpensesOuput";

function AllExpenses() {
  const listExpenses = useSelector((state) => state.expenses.expenseState);
  return (
    <ExpensesOuput
      name="Total Expenses"
      expenses={listExpenses}
      fallBack="No registered expenes found !!"
    />
  );
}

export default AllExpenses;
