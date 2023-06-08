import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(e.target.value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("leesul", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* 아래처럼 분리해서 쓸 수 있음 */}
      {/* <input placeholder="name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="name" {...name} />
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
