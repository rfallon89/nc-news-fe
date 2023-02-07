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

export const getTopics = () => {
  return api.get("/topics").then(({ data: { topics } }) => topics);
};

export const getCommentsbyArticleId = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => comments);
};
