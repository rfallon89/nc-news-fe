import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-v1ty.onrender.com/api",
});

export const getArticles = (topic) => {
  return api
    .get("/articles", {
      params: {
        topic: topic,
      },
    })
    .then(({ data: { articles } }) => articles);
};
