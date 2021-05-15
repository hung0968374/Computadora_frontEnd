import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  var facebookUserId = "";
  if (localStorage.getItem("facebookCurrentUserId")) {
    facebookUserId = localStorage.getItem("facebookCurrentUserId");
  }
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    req.headers.facebookUserId = facebookUserId;
  }
  return req;
});

///////////post
export const fetchPostByPage = (page) =>
  API.get(`/api/posts/genre=laptop/filter?page=${page}&amountPerPage=24`);
export const fetchPosts = () => API.get("/products");
export const fetchItemById = (id) => API.get(`/api/posts/${id}`);

/////////////account signIn signUp
export const activateAccount = (obj) =>
  API.post("api/auth/register/activateAccount", obj);
export const signIn = (obj) => API.post("/api/auth/login", obj);
export const signUp = (obj) =>
  API.post("/api/auth/register/verifyAccount", obj);

///////// invoice
export const createNewInvoice = (obj) => API.post("/api/invoices", obj);
export const getAllInvoices = () => API.get("/api/invoices");
export const getInvoicesByParticularUser = () =>
  API.get("/api/invoices/getInvoiceByParticularUser");

////////// search
export const getSearchResultsPool = () =>
  API.get("/api/posts/search/searchItemsPool");

/////////// comment
export const postAComment = (obj) => API.post("/api/comment", obj);
export const getCommentsByPostId = (id) => API.get(`/api/comment/postId/${id}`);
export const getSlicedCommentsByPostId = (id, page) =>
  API.get(`/api/comment/filter?postId=${id}&&page=${page}`);
export const deleteComment = (obj) =>
  API.delete(`/api/comment/${obj._id}`, { data: obj });

/////////// change user property
export const updateJWTUserBaseInfo = (obj) => API.put(`/api/user`, obj);
export const updateJWTUserPassword = (obj) =>
  API.put(`/api/user/changePw`, obj);
export const requireRecoveringPw = (obj) =>
  API.post(`/api/user/recoverPw`, obj);
export const activateRecoveringPw = (obj) =>
  API.post(`/api/user/activateRecoveringPw`, obj);
