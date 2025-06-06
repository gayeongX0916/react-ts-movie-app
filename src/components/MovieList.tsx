import exmapleImg from "../assets/heart.png";
import "./MovieList.css";

const MovieList = () => {
  return (
    <div className="movie-list">
      <button className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </button>
      <div className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </div>
      <div className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </div>
      <div className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </div>
      <div className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </div>
      <div className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </div>
      <div className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </div>
      <div className="movie-card">
        <img src={exmapleImg} alt="하트" width={100} height={170} />
        <span>영화 제목</span>
        <span>2021-01-01</span>
      </div>
    </div>
  );
};

export default MovieList;
