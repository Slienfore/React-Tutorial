import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void; // 点击回调
}

function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status); // onClick 取反
    onClick();
  };

  if (status) {
    // active
    return (
      <AiFillHeart onClick={toggle} color="#ff6b81" size={20}></AiFillHeart>
    );
  } else {
    // inactive
    return <AiOutlineHeart onClick={toggle} size={20}></AiOutlineHeart>;
  }
}

export default Like;
