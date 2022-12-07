import { getCommentsByReview } from "../api";
import "./review.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Comments({ comments, setComments }) {
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReview(review_id).then((data) => {
      setComments(data);
    });
  }, [review_id]);

  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <div className="comment-box">
              <h6 className="user">/{comment.author}</h6>
              <h6 className="time">{comment.created_at}</h6>
              <p className="comment">{comment.body}</p>
              <button className="up-vote">⬆️</button>
              <p className="votes">{comment.votes}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
