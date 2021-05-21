import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const saveExpenseFormHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onSaveNewExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} />
    </div>
  );
};
export default NewExpense;
