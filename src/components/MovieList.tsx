import type { MovieData } from "../types/MovieData";
import "./MovieList.css";

type MovieListProps = {
  movies: MovieData[];
};

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="movie-list">
      {movies.map((item) => (
        <button className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="하트"
            width={100}
            height={170}
          />
          <span>{item.title}</span>
          <span>{item.release_date}</span>
        </button>
      ))}
    </div>
  );
};

export default MovieList;
