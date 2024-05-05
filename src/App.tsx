import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroupList"; // 引入组件

function App() {
  const items = ["China", "New York", "Tokyo", "London", "San Francisco"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
