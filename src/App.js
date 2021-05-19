import ExpenseItem from "./components/ExpenseItem";
import expenses from "./components/expenses";

function CreateItem(expenses){
  return(
    <ExpenseItem
      key = {expenses.id}
      title = {expenses.title}
      amount = {expenses.amount}
      date = {expenses.date}
    />
  );
}

function App() {
  
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(CreateItem)}
    </div>
  );
}

export default App;
