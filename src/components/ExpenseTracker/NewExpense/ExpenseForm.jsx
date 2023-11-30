import { useState } from "react";
import "./ExpenseForm.scss";


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    e.target.reset()
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Nombre del producto</label>
          <input 
          type="text" 
          valeu={enteredTitle} 
          onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Precio</label>
          <input
            type="number"
            valeu={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Fecha</label>
          <input
            type="date"
            valeu={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancelar</button>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
