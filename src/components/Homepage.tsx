import { useEffect, useState } from 'react';
import { fetchMovieByTitle } from '../api/movies';
import { Link } from 'react-router-dom';
import { Movie } from '../types';

const Homepage: React.FC = () => {
  const [movies, setMovies] = useState<{ latestMovies: Movie[]; furiousMovies: Movie[] }>({
    latestMovies: [],
    furiousMovies: [],
  });

  useEffect(() => {
    const fetchMovies = async () => {
      const latestMovies = await fetchMovieByTitle('movie');
      const furiousMovies = await fetchMovieByTitle('furious');
      setMovies({latestMovies, furiousMovies});
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto py-8 px-10 w-full">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">Latest Movies</h2>
          <ul className="grid xl:grid-cols-5 grid-cols-2 gap-4">
            {movies.latestMovies.map(movie => (
              <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                <li key={movie.imdbID}>
                  <img alt={movie.Title} src={movie.Poster} />
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <div className="sticky top-10">
            <h2 className="text-2xl font-bold mb-4">Furious Movies</h2>
            <ul>
              {movies.furiousMovies.map((movie, index) => (
                <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                  <li className="mb-3" key={movie.imdbID}><span className="bg-sky-500 text-white py-1 px-2 me-2 rounded">{index+1}</span>{movie.Title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
