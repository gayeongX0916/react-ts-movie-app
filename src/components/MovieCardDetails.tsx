import "./MovieCardDetails.css";
import exampleImg from "../assets/heart.png";

const MovieCard = () => {
  return (
    <div className="movie-card-details">
      <img
        src={exampleImg}
        alt="영화 포스터"
        className="movie-poster"
        width={230}
        height={250}
      />
      <div className="card-info">
        <h2 className="card-movie-title">영화 제목</h2>
        <span className="card-movie-rating">⭐ 4.5 / 5.0</span>
        <span className="card-movie-opening">개봉일: 2025-01-01</span>
        <div className="card-movie-director-actors">
          <span>감독: 홍길동</span>
          <span>출연: 김철수, 이영희</span>
        </div>
        <p className="card-movie-summary">
          이 영화는 흥미진진한 스토리와 감동적인 메시지를 담고 있습니다. 꼭
          보세요!
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
