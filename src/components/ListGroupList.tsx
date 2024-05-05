import { MouseEvent } from "react";

function ListGroup() {
  const items = ["China", "New York", "Tokyo", "London", "San Francisco"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Compo</h1>
      {/* 避免 null 渲染 */}
      {!items.length && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
