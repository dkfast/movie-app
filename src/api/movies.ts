import axios from 'axios';
import { Movie } from '../types';

const OMDB_API_KEY = 'e8ceb53d'; // Replace with your actual API key

export const fetchMovieByTitle = async (term: string | undefined): Promise<Movie[]> => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${term}&type=movie&r=json`
    );
    return response.data.Search;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return [];
  }
};


export const fetchMovieById = async (id: string | undefined): Promise<Movie> => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&type=movie&r=json`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return {} as Movie;
  }
};