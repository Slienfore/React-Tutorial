import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import { produce } from "immer";
import { useImmer } from "use-immer";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./components/ExpanseTracker/components/ExpenseList";
import ExpenseFilter from "./components/ExpanseTracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useImmer([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  // if user select the category, it will filter target items, or will return origin expenses
  // why not use the state？ -> once user select the category, will trigger the 'setSelectedCategory' changing, view will render again
  const visibleExpenses = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category: string) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses((draft) => {
            const objIndex = draft.findIndex((item) => item.id === id);
            draft.splice(objIndex, 1); // delete item from list
          })
        }
      ></ExpenseList>
    </>
  );
}

export default App;
