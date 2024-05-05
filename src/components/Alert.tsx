import { ReactNode } from "react";

interface Props {
  children: ReactNode; // children 使用 ReactNode进行接收
  onClose: () => void; // 关闭按钮回调
}

const Alert = ({ children, onClose }: Props) => {
  // 添加 关闭按钮 和 .alert-dismissible 类,
  // 这将在警告框 (alert) 组件的右侧增加额外的空间并放置关闭按钮。
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
