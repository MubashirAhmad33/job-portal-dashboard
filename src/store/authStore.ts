export type AdminUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export const currentAdmin: AdminUser = {
  id: 1,
  name: "Admin User",
  email: "admin@example.com",
  role: "Administrator",
};
