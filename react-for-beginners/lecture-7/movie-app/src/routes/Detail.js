import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const notFound = "존재하지 않는 영화입니다";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await (
          await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
          )
        ).json();
        const data = response.data.movie;
        // console.log(data.id);
        if (data.id === 0) {
          navigate("/404", { state: { msg: notFound } });
        } else setMovie(data);
      } catch (error) {
        navigate("/404", { state: { msg: notFound } });
      }
    };
    getMovie();
  }, [movieId, navigate]);

  return <h1>{movie.title}</h1>;
}

export default Detail;
