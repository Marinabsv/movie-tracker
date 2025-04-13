import React from "react";
import { MovieListProps } from "../../utils/types";
import styles from "./styles.module.scss"; 

const defaultCover = 'movie-tracker\src\assets\images\default-cover.jpg';

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className={styles.movie}>
      <div className={styles.movie__grid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie__card}>
            {/* Отображаем обложку */}
            <img
              src={movie.cover || defaultCover} // Используем дефолтное изображение, если cover отсутствует
              alt={`Обложка фильма ${movie.title}`}
              className={styles.movie__cover}
            />
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__description}>{movie.description}</p>
            <p className={styles.movie__duration}>Продолжительность: {movie.duration} мин</p>
            <p className={styles.movie__status}>Статус: {movie.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;