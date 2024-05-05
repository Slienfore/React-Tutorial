import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
}

export default App;
