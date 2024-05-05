function ListGroup() {
  const items = ["China", "New York", "Tokyo", "London", "San Francisco"];
  return (
    <>
      <h1>List Compo</h1>
      {/* 避免 null 渲染 */}
      {!items.length && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
