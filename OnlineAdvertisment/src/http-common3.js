import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8003/ems/",
  headers: {
    "Content-Type": "application/json",
  },
});
