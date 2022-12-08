import "./review-board.css";
import { useEffect } from "react";
import { getReviewBoardByQuery } from "../api";
import { Link } from "react-router-dom";

function FilteredReviewList(
  filteredReviews,
  setFilteredReviews,
  loading,
  setLoading,
  chosenCategory
) {
  useEffect(() => {
    getReviewBoardByQuery(chosenCategory).then((data) => {
      console.log(data);
      setFilteredReviews(data);
      setLoading(false);
    });
  }, [chosenCategory]);

  if (loading) return <p className="loading-screen">Loading Reviews...</p>;
  return (
    <ul className="review-list">
      {filteredReviews.map((review) => {
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

export default FilteredReviewList;
