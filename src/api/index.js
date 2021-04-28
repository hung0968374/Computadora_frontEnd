import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});
export const fetchPostByPage = (page) =>
  API.get("/api/posts/page=2/amountPerPage=24");
export const fetchPosts = () => API.get("/products");
export const fetchPostsById = (id) => API.get(`/users/${id}`);
