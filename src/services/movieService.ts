import { Movie } from "../utils/types";

const MOVIE_STORAGE_KEY = 'movies';

export const saveMoviesToLocalStorage = (movies: Movie[]) => {
  localStorage.setItem(MOVIE_STORAGE_KEY, JSON.stringify(movies));
};

export const loadMoviesFromLocalStorage = (): Movie[] => {
  const storedMovies = localStorage.getItem(MOVIE_STORAGE_KEY);
  return storedMovies ? JSON.parse(storedMovies) : [];
};