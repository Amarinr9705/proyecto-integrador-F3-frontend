import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses= {filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
