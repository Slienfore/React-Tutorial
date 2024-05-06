import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number; // optional
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpand, setExpand] = useState(false);

  // if children.length === 0, also will implement
  if (children.length <= maxChars) return <p>{children}</p>;

  // sub the string
  const sub = isExpand ? children : children.substring(0, maxChars);
  return (
    <p>
      {sub}
      {isExpand ? "" : "..."}
      <button onClick={() => setExpand(!isExpand)}>
        {isExpand ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
