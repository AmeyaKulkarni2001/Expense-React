import React,{ useState } from "react";
import Expense from './components/Expenses/Expense';
import NewExpense from "./components/NewExpenses/NewExpense";

const dummy = [
  
];

const App = () => {
  
  const[expenses, setExpenses] = useState(dummy)

  const saveNewExpenseHandler = (enteredNewExpense) =>{
    setExpenses(prevExpense =>{
      return [enteredNewExpense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;