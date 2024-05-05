import { useState } from "react";
// import styles from "./ListGroup.module.css"; // 引入 css
import styled from "styled-components"; // 引入 styled-component

// styled.?`` -> 返回生成 React组件
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  // 根据 props 的值进行 控制
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // useState(initialState)
  // set 函数，例如 setSomething(nextState)
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {/* 避免 null 渲染 */}
      {!items.length && <p>No item found</p>}

      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item); // 子向父传值
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
