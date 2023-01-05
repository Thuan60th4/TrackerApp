import { useSelector } from "react-redux";
import ExpensesOuput from "../components/ExpensesOuput/ExpensesOuput";

function RecentExpenses() {
  const listExpenses = useSelector((state) => state.expenses.expenseState);

  const date = new Date();
  date.setDate(date.getDate() - 7);
  const expensesCond = new Date(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  );
  const expensesListCond = listExpenses.filter(
    (expense) => expense.date >= expensesCond
  );

  return (
    <ExpensesOuput
      name="Last 7 Days Expenses"
      expenses={expensesListCond}
      fallBack="No registered expenes found for the last 7 days !!"
    />
  );
}

export default RecentExpenses;
