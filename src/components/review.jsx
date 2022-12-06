import { useEffect, useState } from "react";
import { getReviewById } from "../api";
import { useParams } from "react-router-dom";
import "./review.css";

const Review = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});

  useEffect(() => {
    getReviewById(review_id).then((data) => {
      setSingleReview(data);
      console.log(data);
    });
  }, [review_id]);

  return (
    <div className="review-page">
      <h2 className="title">{singleReview.title}</h2>
      <h6 className="owner">/{singleReview.owner}</h6>
      <h6 className="date">{singleReview.created_at}</h6>
      <p className="body">{singleReview.review_body}</p>
      <h5 className="comment-header">{singleReview.comment_count} Comments</h5>
      <button className="like-button">Like</button>
      <p className="comments">comment section here</p>
    </div>
  );
};

export default Review;
