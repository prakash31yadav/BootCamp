import httpClient from "../http-common3";

const create = (data) => {
  return httpClient.post("/insert", data);
};
const getAll = () => {
  return httpClient.get("/getallorders");
};
const remove = (id) => {
  return httpClient.delete(`/deleteorder/${id}`);
};
export default { create, getAll ,remove};
