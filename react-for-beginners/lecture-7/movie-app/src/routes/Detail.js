import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../components/Header";
import detail from "../styles/Detail.module.css";

function Detail() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const notFound = "존재하지 않는 영화정보입니다.";

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
        console.log(data);
        if (data.id === 0) {
          navigate("/404", { state: { msg: notFound } });
        } else setMovie(data);
      } catch (error) {
        navigate("/404", { state: { msg: notFound } });
      }
    };
    getMovie();
  }, [movieId, navigate]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <Header title={movie.title} rating={movie.rating} />
      <div className={detail.container}>
        <article>
          {movie.yt_trailer_code ? (
            <YouTube videoId={movie.yt_trailer_code} opts={opts} />
          ) : null}
          <div className={detail.etc}>
            <ul>
              {movie.genres &&
                movie.genres.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <span>{movie.runtime} min</span>
          </div>
          <p className={detail.description}>{movie.description_intro}</p>
          <button className={detail.nav} onClick={() => navigate(-1)}>
            go back 👈
          </button>
        </article>
      </div>
    </>
  );
}

export default Detail;
