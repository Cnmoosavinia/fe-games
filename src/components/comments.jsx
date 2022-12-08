import { getCommentsByReview, postComment } from "../api";
import "./review.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Comments({ comments, setComments, loading, setLoading }) {
  const { review_id } = useParams();
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const refresh = document.getElementById("reloading");
    refresh.classList.remove("reloading-off");

    postComment(newComment, review_id).then(() => {
      getCommentsByReview(review_id)
        .then((data) => {
          setComments(data);
        })
        .then(() => {
          refresh.classList.add("reloading-off");
        });
    });
    setNewComment("");
  };

  useEffect(() => {
    getCommentsByReview(review_id).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [review_id]);

  return (
    <ul className="comment-list">
      <div className="comment-section">
        <img
          className="pfp"
          src="https://scontent.fman4-2.fna.fbcdn.net/v/t1.18169-9/1044725_10151527841570922_2110461867_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qzcXY7CFmlcAX9SVbW9&_nc_ht=scontent.fman4-2.fna&oh=00_AfDNLFtojnACZzG2HJZ47hgd88pBRCoEIMZysUuWNBs2Cw&oe=63B7EA0B"
        ></img>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="newComment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            placeholder="Add a comment..."
          />
          <input type="Submit" />
        </form>
        <div id="reloading" className="reloading-off">
          Loading
        </div>
      </div>
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
