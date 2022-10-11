import httpClient from "../http-common1";

const getAll = () => {
  return httpClient.get("/viewall");
};

const get = (id) => {
  return httpClient.get(`/get/${id}`);
};

const create = (data) => {
  return httpClient.post("/save", data);
};

const update = (data) => {
  return httpClient.put("/update", data);
};

const remove = (id) => {
  return httpClient.delete(`/delete/${id}`);
};
const login = (customer) => {
  return httpClient.post(`/login`,customer);
};

export default { getAll, create, get, update, remove ,login};
