import Header from "../components/Header";
import Movie from "../components/Movie";
import home from "../styles/Home.module.css";

function Home({ loading, movieArr }) {
  return (
    <>
      <Header />
      <div className={home.container}>
        {loading ? (
          <h3 className={home.loader}>loading... 🎬</h3>
        ) : (
          <ul className={home.movies}>
            {movieArr.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.large_cover_image}
                title={movie.title}
                rating={movie.rating}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Home;
