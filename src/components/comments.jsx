import { getCommentsByReview, postComment } from "../api";
import "./review.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context";
import { formatDistanceToNowStrict } from "date-fns";

function Comments({ comments, setComments }) {
  const { review_id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentFailed, setCommentFailed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingComments(true);
    postComment(user.username, newComment, review_id).then(() => {
      getCommentsByReview(review_id).then((data) => {
        setComments(data);
        setLoadingComments(false);
      });
    });
    setNewComment("");
  };

  useEffect(() => {
    getCommentsByReview(review_id).then((data) => {
      setComments(data);
      setLoadingComments(false);
    });
  }, [review_id]);

  if (loadingComments)
    return (
      <div id="reloading" className="reloading">
        <div className="comment-section">
          <img
            className="pfp"
            src="https://scontent.fman4-2.fna.fbcdn.net/v/t1.18169-9/1044725_10151527841570922_2110461867_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qzcXY7CFmlcAX9SVbW9&_nc_ht=scontent.fman4-2.fna&oh=00_AfDNLFtojnACZzG2HJZ47hgd88pBRCoEIMZysUuWNBs2Cw&oe=63B7EA0B"
          ></img>
          <form onSubmit={handleSubmit} className="comment-form">
            <textarea
              readonly
              type="text"
              id="newComment"
              className="input-comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              placeholder="Add a comment..."
            />
            <button className="submit-button" disabled>
              Loading
            </button>
          </form>
        </div>
      </div>
    );

  return (
    <ul className="comment-list">
      <div className="comment-section">
        <img className="pfp" src={user.avatar_url}></img>
        <form onSubmit={handleSubmit} className="comment-form">
          <textarea
            type="text"
            id="newComment"
            className="input-comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            placeholder="Add a comment..."
          />
          <input type="Submit" className="submit-button" />
        </form>
      </div>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <div className="comment-box">
              <h6 className="user">/{comment.author}</h6>
              <h6 className="time">
                {formatDistanceToNowStrict(
                  new Date(comment.created_at),
                  "yyyy-MM-dd"
                )}{" "}
                ago
              </h6>
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
