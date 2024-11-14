import baseClient from "./baseClient";

const endPoint = "/cards.json";

const getCards = (userId) => baseClient.get(`/${userId}/${endPoint}`);

const postCards = (userId, cards) =>
  baseClient.put(`/${userId}/${endPoint}`, cards, {
    headers: {
      "Content-Type": "application/json",
    },
    onUploadProgress: (progressEvent) => {
      const progress = progressEvent.loaded / progressEvent.total;
    },
  });

export default {
  getCards,
  postCards,
};
