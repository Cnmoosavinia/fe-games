import "./review-board.css";
import { useEffect } from "react";
import { getReviewBoard } from "../api";

function ReviewList({ reviews, setReviews }) {
  useEffect(() => {
    getReviewBoard().then((data) => {
      setReviews(data);
    });
  }, []);
  return (
    <ul className="review-list">
      {reviews.map((review) => {
        return (
          <li key={review.review_id} className="review">
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
        );
      })}
    </ul>
  );
}

export default ReviewList;
