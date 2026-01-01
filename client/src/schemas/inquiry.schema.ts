import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  message: z.string().min(5, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
