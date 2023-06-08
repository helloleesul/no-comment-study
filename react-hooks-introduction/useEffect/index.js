import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);

  const sayHello = () => console.log("hello");

  useEffect(sayHello, [plus]);

  return (
    <div className="App">
      <button onClick={() => setPlus(plus + 1)}>{plus} 증가</button>
      <button onClick={() => setMinus(minus - 1)}>{minus} 증감</button>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
