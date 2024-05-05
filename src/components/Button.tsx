interface Props {
  children: string; // 字符型子组件
  color?: 'primary' | 'success' | 'secondary' | 'danger'; // 接收颜色(可选)
  onClick: () => void; // 点击事件
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
