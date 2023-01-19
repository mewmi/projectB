import api from "./api";

export const songLoadSingle = (id) =>
  api.get(`/songs/${id}`).then((response) => response.data);

export const songLoadAll = () =>
  api.get(`/songs`).then((response) => response.data);

export const songAdd = (song, storedToken) =>
  api
    .post(`/songs`, song, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);

export const songEdit = (id, song, storedToken) =>
  api
    .patch(`/songs/${id}`, song, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);

export const songDelete = (id, storedToken) =>
  api
    .delete(`/songs/${id}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data);
