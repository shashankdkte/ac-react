import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {

 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  )
}

export default ExpenseItem;