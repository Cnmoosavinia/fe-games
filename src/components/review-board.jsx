import "./review-board.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ReviewList from "./review-list.jsx";
import Review from "./review.jsx";
import Search from "./search.jsx";

function ReviewBoard() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("");

  return (
    <div className="ReviewBoard">
      <Routes>
        <Route
          path="/"
          element={
            <Search
              loading={loading}
              setLoading={setLoading}
              setChosenCategory={setChosenCategory}
            />
          }
        ></Route>
        <Route
          path="/reviews"
          element={
            <ReviewList
              reviews={reviews}
              setReviews={setReviews}
              loading={loading}
              setLoading={setLoading}
              chosenCategory={chosenCategory}
              setChosenCategory={setChosenCategory}
            />
          }
        ></Route>
        <Route
          path="/reviews/:review_id"
          element={<Review loading={loading} setLoading={setLoading} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default ReviewBoard;
