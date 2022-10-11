import httpClient from "../http-common2";

const getAll = () => {
  return httpClient.get("/allproduct");
};

const get = (id) => {
  return httpClient.get(`/getproducts/${id}`);
};

const create = (data) => {
  return httpClient.post("/saveproduct", data);
};

const update = (data) => {
  return httpClient.put("/updateproducts", data);
};

const remove = (id) => {
  return httpClient.delete(`/deleteProducts/${id}`);
};

export default { getAll, create, get, update, remove };
