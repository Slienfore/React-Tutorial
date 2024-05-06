import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import { produce } from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Big" },
    { id: 2, title: "Small" },
  ]);

  const handleClick = () => {
    // setBugs( bugs.map((item) => (item.id === 2 ? { ...item, title: "Bug" } : item)) );

    setBugs(

      produce((draft) => {

        const bug = draft.find((item) => item.id === 2)!;
        bug.title = "Bug";

      })
      
    );
  };

  return (
    <>
      {bugs}
      <Like onClick={handleClick}></Like>
      <Like onClick={handleClick}></Like>
    </>
  );
}

export default App;
