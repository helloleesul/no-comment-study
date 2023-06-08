import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const arbort = () => console.log("arborted.");
  const confirmDelete = useConfirm("are u sure?", deleteWorld, arbort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
