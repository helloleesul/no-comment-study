import propTypes from "prop-types";
import { Link } from "react-router-dom";
import movie from "../styles/Movie.module.css";

function Movie({ id, coverImg, title, rating }) {
  return (
    <li className={movie.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
        <div className={movie.card}>
          <h2>{title}</h2>
          <span>{" 💛 ".repeat(rating)}</span>
          <span className={movie.rating}>
            a rating of <b>{rating}</b>
          </span>
        </div>
      </Link>
    </li>
  );
}

Movie.protoTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
