import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
// npm install axios 해야함
import useAxios from "./useAxios";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  // console.log(loading, error, JSON.stringify(data));
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
