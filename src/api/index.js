import axios from "axios";

const API = axios.create({
  // baseURL: "https://computadora-api.herokuapp.com/",
  baseURL: "http://localhost:5000/",
});

export const fetchPostByPage = (page) =>
  API.get(`/api/posts/genre=laptop/filter?page=${page}&amountPerPage=24`);
export const signIn = (obj) => API.post("/api/auth/login", obj);
export const sendFormIncludingFilesToServer = (obj) =>
  API.post("/api/laptops/mulFile", obj);
