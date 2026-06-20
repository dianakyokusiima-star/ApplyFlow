import { Hono } from "hono";

export const authMiddleware = async (c: any, next: () => Promise<void>) => {
  // Placeholder for Clerk/Auth
  // In a real app, we'd verify the JWT and set c.set("user", user)
  c.set("userId", "test-user-id"); // Mock user ID
  await next();
};
