import axios from "axios";

const reivewApi = axios.create({
  baseURL: "https://itchy-cyan-salamander.cyclic.app/api",
});

export const getReviewBoard = () => {
  return reivewApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
