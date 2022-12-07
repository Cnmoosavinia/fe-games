import { useEffect, useState } from "react";
import { getReviewById, likeReview, unlikeReview } from "../api";
import { useParams } from "react-router-dom";
import "./review.css";
import Comments from "./comments.jsx";

const Review = ({ loading, setLoading }) => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);
  const [likedReview, setLikedReview] = useState(0);
  const [likeToggle, setLikeToggle] = useState(false);

  useEffect(() => {
    getReviewById(review_id).then((data) => {
      setSingleReview(data);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) return <p className="loading-screen">Loading Review...</p>;
  return (
    <div>
      <div className="review-page">
        <h2 className="title">{singleReview.title}</h2>
        <h6 className="owner">/{singleReview.owner}</h6>
        <h6 className="date">{singleReview.created_at}</h6>
        <p className="body">{singleReview.review_body}</p>
        <h5 className="comment-header">
          {singleReview.comment_count} Comments
        </h5>
        <button
          className="like-button"
          onClick={() => {
            if (!likeToggle) {
              likeReview(singleReview.review_id);
              setLikedReview(1);
              setLikeToggle(true);
            } else if (likeToggle) {
              unlikeReview(singleReview.review_id);
              setLikedReview(0);
              setLikeToggle(false);
            }
          }}
        >
          👍 {singleReview.votes + likedReview}
        </button>
      </div>
      <div>
        <Comments
          comments={comments}
          setComments={setComments}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default Review;
