import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Click!")} color="primary">
        My Button
      </Button>
    </div>
  );
}

export default App;
