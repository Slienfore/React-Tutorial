import { ReactNode } from "react";

interface Props {
  children: ReactNode;// children 使用 ReactNode进行接收
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
