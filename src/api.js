import axios from "axios";

const reviewApi = axios.create({
  baseURL: "https://itchy-cyan-salamander.cyclic.app/api",
});

export const getReviewBoard = () => {
  return reviewApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return reviewApi.get(`reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCommentsByReview = (review_id) => {
  return reviewApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const likeReview = (review_id) => {
  const body = { inc_votes: 1 };
  return reviewApi.patch(`reviews/${review_id}`, body).then((res) => {
    return res.data.review;
  });
};

export const unlikeReview = (review_id) => {
  const body = { inc_votes: -1 };
  return reviewApi.patch(`reviews/${review_id}`, body).then((res) => {
    return res.data.review;
  });
};

export const postComment = (comment, review_id) => {
  const inputComment = { username: "tickle122", body: comment };

  return reviewApi
    .post(`reviews/${review_id}/comments`, inputComment)
    .then((res) => {
      return res.data.comment;
    });
};
