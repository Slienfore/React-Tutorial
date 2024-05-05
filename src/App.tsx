import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroupList"; // 引入组件

function App() {
  const items = ["China", "New York", "Tokyo", "London", "San Francisco"];

  // 子向父传值, 传递函数
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
