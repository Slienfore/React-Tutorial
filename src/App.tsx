import { useRef, useEffect } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // afterRender
  useEffect(() => {
    // Side effect
    ref.current?.focus();
  });

  useEffect(() => {
    document.title = "React Hook of useEffect";
  });

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
