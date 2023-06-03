import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinArr, setCoinArr] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinArr(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coin Tracker 💰 {loading ? null : `(${coinArr.length})`}</h1>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coinArr.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}): 💲
            {coin.quotes.USD.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
