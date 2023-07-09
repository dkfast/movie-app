import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieById } from '../api/movies';
import { Movie } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SingleMovie: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Access the movie ID from the URL params
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(id);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (movie === null) {
    return <div>Loading...</div>; // Show a loading state while fetching the movie details
  }

  return (
    <div className="container mx-auto py-8 px-10">
      <div className="grid xl:grid-cols-8 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="xl:col-span-3 col-span-1 xl:col-start-2 col-start-1">
          {<Link to="/" className="mb-5 inline-block hover:text-sky-500">
            <FontAwesomeIcon icon={faArrowLeft} className="me-3" />Go Back
          </Link>}
          <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
          <p className="mb-3">{movie.Plot} <a className="text-sky-500" href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">Read More</a></p>
          <h1 className="text-2xl font-bold mb-4 mt-6">Movie Details</h1>
          <p>Director: {movie.Director}</p>
          <p>Cast: {movie.Actors}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Rated: {movie.Rated}</p>
          <p>Release Date: {movie.Released}</p>
          <div className="grid grid-cols-3 gap-2 mt-10">
          {movie.Ratings[0] && (
            <div className="text-center border-solid border-2 rounded">
                <p>IMDB</p>
                <p>{movie.Ratings[0]['Value']}</p>
              </div>
            )}
            {movie.Ratings[1] && (
              <div className="text-center border-solid border-2 rounded">
                <p>Rotten Tomatoes</p>
                <p>{movie.Ratings[1]['Value']}</p>
              </div>
            )}
            {movie.Ratings[2] && (
              <div className="text-center border-solid border-2 rounded">
                <p>Metacritic</p>
                <p>{movie.Ratings[2]['Value']}</p>
              </div>
            )}
          </div>
        </div>
        <div className="xl:col-span-3 col-span-1 md:mt-10 mt-0">
          <img className="mx-auto" src={movie.Poster} alt={movie.Title} />
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
