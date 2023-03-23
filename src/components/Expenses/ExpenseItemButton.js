import React from "react";
import "../NewExpense/ExpenseForm.css";


function ExpenseItemButton(props) {
  const handleAddNewExpense = () => {
    props.setButtonNewExpense(true)
  };
  return (
    <div
      className="new-expense
        "
    >
      <button onClick={() => handleAddNewExpense()}>Add New Expense</button>
    </div>
  );
}

export default ExpenseItemButton;
