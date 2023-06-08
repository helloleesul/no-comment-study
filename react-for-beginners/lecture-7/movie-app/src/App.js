import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Error from "./routes/Error";
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
        <Route path="/movie/:movieId" element={<Detail />} />
        <Route path="404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
