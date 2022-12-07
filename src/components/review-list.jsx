import "./review-board.css";
import { useEffect } from "react";
import { getReviewBoard } from "../api";
import { Link } from "react-router-dom";

function ReviewList({ reviews, setReviews, loading, setLoading }) {
  useEffect(() => {
    getReviewBoard().then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="loading-screen">Loading Reviews...</p>;
  return (
    <ul className="review-list">
      {reviews.map((review) => {
        return (
          <div>
            <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
              <li className="review">
                <div className="reviewBox">
                  <h5 className="owner">/{review.owner}</h5>
                  <h3 className="title">{review.title}</h3>
                  <img
                    src={review.review_img_url}
                    alt="review"
                    className="reviewImg"
                  ></img>
                </div>
              </li>
            </Link>
            <div className="review-footer">
              <p className="category">{review.category}</p>
              <p className="review-votes">👍 {review.votes}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default ReviewList;
