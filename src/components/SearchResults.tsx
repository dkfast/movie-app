import { useEffect, useState } from 'react';
import { fetchMovieByTitle } from '../api/movies';
import { useParams, Link } from 'react-router-dom';
import { Movie } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SearchResults: React.FC = () => {
  const { title } = useParams<{ title: string }>(); // Access the movie ID from the URL params
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const latestMovies = await fetchMovieByTitle(title);
      setMovies(latestMovies);
    };

    fetchMovies();
  }, [title]);

  return (
    <div className="container mx-auto py-8 px-10 w-full">
      <div className="col-span-2">
        {<Link to="/" className="mb-5 inline-block hover:text-sky-500">
          <FontAwesomeIcon icon={faArrowLeft} className="me-3" />Go Back
        </Link>}
        <h2 className="text-2xl font-bold mb-4">Search Results: '{title}'</h2>
        <ul className="grid lg:grid-cols-5 grid-cols-2 gap-4">
          {movies.map(movie => (
            <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
              <li key={movie.imdbID}>
                <img alt={movie.Title} src={movie.Poster} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
