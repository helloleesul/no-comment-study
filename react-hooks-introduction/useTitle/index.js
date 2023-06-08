import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("home"), 2000);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
