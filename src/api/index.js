import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});
export const fetchPostByPage = (page) =>
  API.get(`/api/posts/page=${page}/amountPerPage=24`);
export const fetchPosts = () => API.get("/products");
export const fetchItemById = (id) => API.get(`/api/posts/${id}`);
export const activateAccount = (obj) =>
  API.post("api/auth/register/activateAccount", obj);
export const signIn = (obj) => API.post("/api/auth/login", obj);
export const signUp = (obj) =>
  API.post("/api/auth/register/verifyAccount", obj);
export const createNewInvoice = (obj) => API.post("/api/invoices", obj);
