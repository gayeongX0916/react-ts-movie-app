import "./App.css";

function App() {
  return (
    <div className="movie-app">
      <header className="movie-header">
        <div className="movie-header-title">
          <h3>Movie</h3>
          <h3>View</h3>
        </div>
        <input placeholder="Search..." />
      </header>
      <div className="movie-list">영화 목록</div>
    </div>
  );
}

export default App;
