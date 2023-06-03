import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("detroyed :(");
  }, []);
  return <h2>Hello</h2>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((val) => val + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log("i run all the time.");
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR ", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <div>
        {showing ? <Hello /> : null}
        <button
          onClick={() => {
            setShowing((prev) => !prev);
          }}
        >
          {showing ? "Hide" : "Show"}
        </button>
      </div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Button!</button>
    </div>
  );
}

export default App;
