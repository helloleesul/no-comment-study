import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, rating, genres }) {
  return (
    <li>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
        <div>{title}</div>
        <div>{rating}</div>
        <ul>
          {genres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
