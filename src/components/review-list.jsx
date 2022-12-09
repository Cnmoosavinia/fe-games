import "./review-board.css";
import { useEffect, useState } from "react";
import { getReviewBoard, getReviewBoardByQuery } from "../api";
import { Link, useParams } from "react-router-dom";

function ReviewList({ reviews, setReviews, loading, setLoading }) {
  const { category } = useParams();

  useEffect(() => {
    getReviewBoard(category).then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, [category]);

  if (loading) return <p className="loading-screen">Loading Reviews...</p>;
  return (
    <ul className="review-list">
      {reviews.map((review) => {
        return (
          <div className="reviewBox">
            <h5 className="owner">/{review.owner}</h5>

            <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
              <h3 className="title">{review.title}</h3>
            </Link>
            <img
              src={review.review_img_url}
              alt="review"
              className="reviewImg"
            ></img>
            <p className="category">{review.category}</p>
            <p className="comment-count">{review.comment_count} Comments</p>
            <p className="review-votes">{review.votes} Upvotes</p>
          </div>
        );
      })}
    </ul>
  );
}

export default ReviewList;
