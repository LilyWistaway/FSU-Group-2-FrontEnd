import { apiGet } from "./client";

export const fetchDepartments = () => apiGet("/api/departments");
export const fetchDepartmentById = (id) => apiGet(`/api/departments/${id}`);
