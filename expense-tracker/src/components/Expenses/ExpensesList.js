import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    // <div>
    //   {/* {filteredExpenses.length === 0 && <p> No Expenses Found </p>} */
    //   /* Here after && logic is outputted */}
    //   {expensesContent}
    // </div>
    <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        key={
          expense.id /* Adding this is very important in terms of performance Lec. 65 */
        }
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))};
    </ul>
  );
};
export default ExpensesList;
