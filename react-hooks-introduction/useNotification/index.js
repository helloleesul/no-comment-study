import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNoti;
};

const App = () => {
  const triggerNoti = useNotification("hello?", { body: "wow!" });
  return (
    <div className="App">
      <button onClick={triggerNoti}>Notification</button>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
