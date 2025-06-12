import "../App.css";
import MovieList from "../components/MovieList";
import { useEffect, useState, type KeyboardEvent } from "react";
import fetchMovieData from "../api/fetchMovieData";
import type { MovieData } from "../types/MovieData";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    fetchMovieData(query).then((data) => setMovies(data));
  }, [query]);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchParams({ query: searchTerm });
    }
  };

  return (
    <div className="movie-app">
      <header className="movie-header">
        <div className="movie-header-title">
          <h3>Movie</h3>
          <h3>View</h3>
        </div>
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleSearch(e)}
        />
      </header>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
