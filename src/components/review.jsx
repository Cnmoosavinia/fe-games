import { useEffect, useState } from "react";
import { getReviewById, likeReview, unlikeReview } from "../api";
import { useParams } from "react-router-dom";
import "./review.css";
import Comments from "./comments.jsx";

const Review = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);
  const [likedReview, setLikedReview] = useState(0);
  const [dislikedReview, setDislikedReview] = useState(0);
  const [likeToggle, setLikeToggle] = useState(false);
  const [dislikeToggle, setDislikeToggle] = useState(false);
  const [reviewLoading, setReviewLoading] = useState(true);

  useEffect(() => {
    getReviewById(review_id).then((data) => {
      setSingleReview(data);
      setReviewLoading(false);
    });
  }, [review_id]);

  if (reviewLoading) return <p className="loading-screen">Loading Review...</p>;
  return (
    <div>
      <div className="review">
        <h2 className="title">{singleReview.title}</h2>
        <h6 className="owner">/{singleReview.owner}</h6>
        <h6 className="date">{singleReview.created_at}</h6>
        <p className="body">{singleReview.review_body}</p>
        <h5 className="comment-header">
          {singleReview.comment_count} Comments
        </h5>
        <button
          id="review-upvote"
          className="like-button"
          onClick={(e) => {
            if (!likeToggle) {
              likeReview(singleReview.review_id);
              setLikedReview(1);
              setDislikedReview(0);
              setLikeToggle(true);
              setDislikeToggle(false);
              e.target.classList.add("like-button-on");
              document
                .getElementById("review-downvote")
                .classList.remove("dislike-button-on");
            } else if (likeToggle) {
              unlikeReview(singleReview.review_id);
              setLikedReview(0);
              setLikeToggle(false);
              e.target.classList.remove("like-button-on");
            }
            if (dislikeToggle) likeReview(singleReview.review_id);
          }}
        >
          ⬆️
        </button>
        <p className="vote-count">
          {singleReview.votes + likedReview - dislikedReview}
        </p>
        <button
          id="review-downvote"
          className="dislike-button"
          onClick={(e) => {
            if (!dislikeToggle) {
              unlikeReview(singleReview.review_id);
              setDislikedReview(1);
              setDislikeToggle(true);
              setLikedReview(0);
              setLikeToggle(false);
              e.target.classList.add("dislike-button-on");
              document
                .getElementById("review-upvote")
                .classList.remove("like-button-on");
            } else if (dislikeToggle) {
              likeReview(singleReview.review_id);
              setDislikedReview(0);
              setDislikeToggle(false);
              e.target.classList.remove("dislike-button-on");
            }
            if (likeToggle) unlikeReview(singleReview.review_id);
          }}
        >
          ⬇️
        </button>
      </div>
      <div>
        <Comments comments={comments} setComments={setComments} />
      </div>
    </div>
  );
};

export default Review;
