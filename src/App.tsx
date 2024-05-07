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
import ExpanseList from "./components/ExpanseTracker/components/ExpanseList";

function App() {
  const [expenses, setExpenses] = useImmer([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  return (
    <>
      <ExpanseList
        expenses={expenses}
        onDelete={(id: number) =>
          setExpenses((draft) => {
            const objIndex = draft.findIndex((item) => item.id === id);
            draft.splice(objIndex, 1); // delete item from list
          })
        }
      ></ExpanseList>
    </>
  );
}

export default App;
