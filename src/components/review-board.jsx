import "./review-board.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewList from "./review-list.jsx";
import { useState } from "react";
import Review from "./review.jsx";

function ReviewBoard() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="ReviewBoard">
      <BrowserRouter>
        <Routes>
          <Route
            path="/reviews"
            element={
              <ReviewList
                reviews={reviews}
                setReviews={setReviews}
                loading={loading}
                setLoading={setLoading}
              />
            }
          ></Route>
          <Route path="/reviews/:review_id" element={<Review />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ReviewBoard;
