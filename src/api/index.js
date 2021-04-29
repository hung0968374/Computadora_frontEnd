import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});
export const fetchPostByPage = (page) =>
  API.get(`/api/posts/page=${page}/amountPerPage=24`);
export const fetchPosts = () => API.get("/products");
export const fetchItemById = (id) => API.get(`/api/posts/${id}`);
