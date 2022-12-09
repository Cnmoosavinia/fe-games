import "./review-board.css";
import { useEffect, useState } from "react";
import { getReviewBoard } from "../api";
import { Link, useParams } from "react-router-dom";
import { formatDistanceToNowStrict } from "date-fns";
import Sort from "./sort.jsx";

function ReviewList({ reviews, setReviews, loading, setLoading }) {
  const { category } = useParams();
  const [sort_by, setSortBy] = useState("");
  const [order, setOrderBy] = useState("");

  useEffect(() => {
    getReviewBoard(category, sort_by, order).then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, [category, sort_by, order]);

  if (loading) return <p className="loading-screen">Loading Reviews...</p>;
  return (
    <div>
      <div className="sort-menu">
        <Sort setSortBy={setSortBy} setOrderBy={setOrderBy} />
      </div>
      <ul className="review-list">
        {reviews.map((review) => {
          return (
            <div className="reviewBox" key={review.review_id}>
              <h5 className="owner">/{review.owner}</h5>
              <h6 className="posted-date">
                {" "}
                posted{" "}
                {formatDistanceToNowStrict(
                  new Date(review.created_at),
                  "yyyy-MM-dd"
                )}{" "}
                ago
              </h6>

              <Link
                to={`/reviews/${review.review_id}`}
                key={review.review_id}
                className="title"
              >
                <h3 className="nested-title">{review.title}</h3>
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
    </div>
  );
}

export default ReviewList;
