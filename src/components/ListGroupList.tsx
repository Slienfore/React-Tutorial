import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // useState(initialState)
  // set 函数，例如 setSomething(nextState)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* 避免 null 渲染 */}
      {!items.length && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
