import AddMovie from "../../components/AddMovie";

import React, { useState } from 'react';
import { Movie } from "../../utils/types";
import styles from "./styles.module.scss";
import MovieList from "../../components/MovieList";

const MainPage = () => {
      const [movies, setMovies] = useState<Movie[]>([]);
    
      const handleAddMovie = (newMovie: Movie) => {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
      };
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__h1} >Трекер фильмов</h1>
      </header>
      <main className={styles.main}>
      <AddMovie onAddMovie={handleAddMovie} />
      <h2>Список фильмов</h2>
      <MovieList movies={movies} />
      </main>
    </>
  );
};

export default MainPage;
