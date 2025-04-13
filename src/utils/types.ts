export interface Movie {
    id: number;
    title: string;
    description: string;
    duration: number; // Время в минутах
    status: 'watched' | 'watching' | 'to-watch';
    cover: string;
  }

  export interface AddMovieProps {
    onAddMovie: (movie: Movie) => void;
  }

  export interface MovieListProps {
    movies: Movie[];
  }