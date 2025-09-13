// validation/registerSchema.js
import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name is too short")
      .max(30, "Name is too long"),
    phonenumber: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be less than 15 characters"),
    confirmpassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"], // attach error to confirmpassword field
  });
