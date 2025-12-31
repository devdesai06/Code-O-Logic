import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Simple endpoint for contact form (even if frontend-only, good to have)
  app.post(api.inquiries.submit.path, async (req, res) => {
    try {
      const input = api.inquiries.submit.input.parse(req.body);
      await storage.createInquiry(input);
      res.json({ success: true });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  });

  return httpServer;
}
