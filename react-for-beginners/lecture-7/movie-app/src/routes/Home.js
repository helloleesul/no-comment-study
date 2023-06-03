import Movie from "../components/Movie";

function Home({ loading, movieArr }) {
  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <ul>
          {movieArr.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.large_cover_image}
              title={movie.title}
              rating={movie.rating}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
