export interface Movie {
  id: string;
  Title: string;
  Poster: string;
  Released: string;
  imdbID: string;
  Actors: string;
  BoxOffice: string;
  Director: string;
  Genre: string;
  Plot: string;
  Rated: string;
  Year: string;
  Ratings: Array<MovieRating>;
};

export interface MovieRating {
  Source: string;
  Value: string;
}