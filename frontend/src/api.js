import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Django runserver 默认
  headers: { "Content-Type": "application/json" },
});

// Categories
export const fetchCategories = () => api.get("/api/categories/");
export const createCategory = (payload) => api.post("/api/categories/", payload);

// Tasks
export const fetchTasks = (params) => api.get("/api/tasks/", { params }); // params: { category_id }
export const createTask = (payload) => api.post("/api/tasks/", payload);
export const patchTask = (id, payload) => api.patch(`/api/tasks/${id}/`, payload);
export const deleteTask = (id) => api.delete(`/api/tasks/${id}/`);
