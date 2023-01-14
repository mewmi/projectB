import api from "./api";

export const songLoadSingle = (id) =>
  api.get(`/songs/${id}`).then((response) => response.data);

export const songLoadAll = () =>
  api.get(`/songs`).then((response) => response.data);

export const songAdd = (song) =>
  api.post(`/songs`, song).then((response) => response.data);

export const songEdit = (id, song) =>
  api.patch(`/songs/${id}`, song).then((response) => response.data);

export const songDelete = (id) =>
  api.delete(`/songs/${id}`).then((response) => response.data);
