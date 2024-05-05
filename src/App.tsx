import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        {/* 将 jsx 作为子组件传递 -> children */}
        <h1>Hello World</h1>
      </Alert>
    </div>
  );
}

export default App;
