import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseItemButton from "../Expenses/ExpenseItemButton";
import "./ExpenseForm.css";

function NewExpense(props) {
  if (props.buttonNewExpense === false) {
    return (
      <ExpenseItemButton
        buttonNewExpense={props.buttonNewExpense}
        setButtonNewExpense={props.setButtonNewExpense}
      />
    );
  } else {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
    };

    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          buttonNewExpense={props.buttonNewExpense}
          setButtonNewExpense={props.setButtonNewExpense}
        />
      </div>
    );
  }
}

export default NewExpense;
