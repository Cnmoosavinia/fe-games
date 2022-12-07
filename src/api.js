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
