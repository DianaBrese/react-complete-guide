import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState();
  const selectedYearHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          selectedYearHandler={selectedYearHandler}
        />

        {props.items.map(function (expense) {
          if (!selectedYear) {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          } else {
            
            if (selectedYear == new Date(expense.date).getFullYear()) {
              console.log(selectedYear, new Date(expense.date).getFullYear())
              return (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
                
              );
            }
          }
        })}
      </Card>
    </div>
  );
};

export default Expenses;
