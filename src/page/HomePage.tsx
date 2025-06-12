import "../App.css";
import MovieList from "../components/MovieList";
import heartIcon from "../assets/heart.png";

const HomePage = () => {
  return (
    <div className="movie-app">
      <header className="movie-header">
        <div className="movie-header-title">
          <h3>Movie</h3>
          <h3>View</h3>
        </div>
        <div className="movie-header-right">
          <input placeholder="Search..." />
          <button className="movie-heart-button">
            <img src={heartIcon} alt="하트" className="movie-heart-icon" />
          </button>
        </div>
      </header>
      <MovieList />
    </div>
  );
};

export default HomePage;
