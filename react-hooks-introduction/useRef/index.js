import { useRef } from "react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const tomato = useRef();
  // setTimeout(() => console.log(tomato.current), 1000);
  // setTimeout(() => {
  //   tomato.current?.focus();
  // }, 1000);
  useEffect(() => {
    setTimeout(() => {
      tomato.current.focus();
    }, 5000);
  });

  return (
    <div className="App">
      <div>hi</div>
      <input placeholder="wow" ref={tomato} />
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
