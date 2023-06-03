import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movieArr, setMovieArr] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count"
    );
    const json = await response.json();
    setMovieArr(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home loading={loading} movieArr={movieArr} />}
        />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
