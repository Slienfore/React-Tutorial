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

function App() {
  return (
    <>
      <ExpandableText>
        The substring() method of String values returns the part of this string
        from the start index up to and excluding the end index, or to the end of
        the string if no end index is supplied.
      </ExpandableText>
    </>
  );
}

export default App;
