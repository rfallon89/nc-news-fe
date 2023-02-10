import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-api-v1ty.onrender.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  const params = {
    params: {
      topic: topic,
      order: order,
    },
  };
  if (sort_by) {
    if (sort_by.length) {
      params.params.sort_by = sort_by;
    }
  }
  return api
    .get("/articles", params)
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

export const postComment = (article_id, username, body) => {
  const commentObj = { username: username, body: body };
  return api
    .post(`/articles/${article_id}/comments`, commentObj)
    .then(({ data: { comment } }) => comment);
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((res) => console.log(res));
};

export const getUserbyUsername = (username) => {
  return api.get(`users/${username}`).then(({ data: { user } }) => user);
};

export const postUser = (userObj) => {
  return api.post("users", userObj).then(({ data: { user } }) => user);
};
