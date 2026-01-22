import { apiGet } from "./client";

export function fetchFaculty() {
  return apiGet("/api/faculty");
}

export function fetchFacultyById(id) {
  return apiGet(`/api/faculty/${id}`);
}
