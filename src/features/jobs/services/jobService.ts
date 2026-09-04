import { api } from "../../../services/api";
import type { Job } from "../../../mocks/jobs";

export async function getJobs() {
  return api<Job[]>("/jobs");
}

export async function getJob(id: number) {
  return api<Job>(`/jobs/${id}`);
}

export async function createJob(data: Partial<Job>) {
  return api<Job>("/jobs", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateJob(id: number, data: Partial<Job>) {
  return api<Job>(`/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteJob(id: number) {
  return api<void>(`/jobs/${id}`, {
    method: "DELETE",
  });
}
