import { useRef } from "react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const useHover = (onHover) => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (el) {
        el.removeEventListener("mouseenter", onHover);
      }
    };
  }, [onHover]);
  return ref;
};

const App = () => {
  const sayHello = () => alert("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
