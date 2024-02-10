import './App.css';
import responseMovies from './mocks/with-results.json';
import withoutResults from './mocks/no-results.json';

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;
  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Avengers, Star Wars, The Godfather..."
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>{withoutResults.Response}</p>
        )}
      </main>
    </div>
  );
}

export default App;
