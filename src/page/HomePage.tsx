import "../App.css";
import MovieList from "../components/MovieList";
import { useEffect, useState } from "react";
import fetchMovieData from "../api/fetchMovieData";
import type { MovieData } from "../types/MovieData";

const HomePage = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    fetchMovieData().then((data) => setMovies(data));
  }, []);

  return (
    <div className="movie-app">
      <header className="movie-header">
        <div className="movie-header-title">
          <h3>Movie</h3>
          <h3>View</h3>
        </div>
        <input placeholder="Search..." />
      </header>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
