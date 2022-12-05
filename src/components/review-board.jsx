import "./review-board.css";
import Review from "./review.jsx";
import ReviewList from "./review-list.jsx";
import { useState } from "react";

function ReviewBoard() {
  const [reviews, setReviews] = useState([]);

  return (
    <div className="ReviewBoard">
      <ReviewList reviews={reviews} setReviews={setReviews} />
      <Review />
    </div>
  );
}

export default ReviewBoard;
