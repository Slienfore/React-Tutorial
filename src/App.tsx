import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* && 进行控制 组件的显示与隐藏 */}
      {alertVisible && (
        // 传递 onClose 回调进行关闭
        <Alert onClose={() => setAlertVisibility(false)}>
          Alert exercise...
        </Alert>
      )}

      {/* 按钮控制 alert 显示与隐藏 */}
      <Button onClick={() => setAlertVisibility(true)} color="primary">
        My Button
      </Button>
    </div>
  );
}

export default App;
