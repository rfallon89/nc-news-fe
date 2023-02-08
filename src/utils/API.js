import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-v1ty.onrender.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  console.log(sort_by, ">>>>");
  return api
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sort_by,
        order: order,
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

export const getArticleById = (id) => {
  return api.get(`/articles/${id}`).then(({ data: { article } }) => article);
};

export const patchArticleById = (id, vote) => {
  const body = { inc_votes: vote };
  return api.patch(`/articles/${id}`, body).then(
    ({
      data: {
        update: { votes },
      },
    }) => votes
  );
};

export const postComment = (article_id, { username }, body) => {
  const commentObj = { username: username, body: body };
  return api
    .post(`/articles/${article_id}/comments`, commentObj)
    .then(({ data: { comment } }) => comment);
};
