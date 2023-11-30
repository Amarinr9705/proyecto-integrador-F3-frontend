import { useState } from "react";
import Expenses from "./ExpenseTracker/Expenses/Expenses";
import NewExpense from "./ExpenseTracker/NewExpense/NewExpense";
import './ExpensesTracker.scss'

const initialExpenses = [
  {
    id: 1,
    title: "Escritorios",
    amount: 2500,
    number: "Cantidad: 10",
    date: new Date(2023, 7, 14),
  },
  { 
    id: 2,
    title: "Parlante JBL", 
    amount: 2034, 
    number: "Cantidad: 3", 
    date: new Date(2023, 2, 12) },
  {
    id: 3,
    title: "Kit base-cama",
    number: "Cantidad: 5",
    amount: 1473,
    date: new Date(2023, 2, 28),
  },
  {
    id: 4,
    title: "Caja fuerte",
    number: "Cantidad: 2",
    amount: 1970,
    date: new Date(2022, 5, 12),
  },
  {
    id: 5,
    title: "Juego de ollas",
    number: "Cantidad: 1",
    amount: 332,
    date: new Date(2022, 2, 8),
  },
];

const ExpensesTracker = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="container-fluid">
      <h1>Recopilador de compras</h1>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses}></Expenses>
    </div>
  )
}

export default ExpensesTracker