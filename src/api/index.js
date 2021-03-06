import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchPosts = () => API.get("/products");
export const fetchPostsById = (id) => API.get(`/users/${id}`);
