import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const [item, setItem] = useState(0);
  const plus = () => setItem(item + 1);
  const minus = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>증감</button>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
