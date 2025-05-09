import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate the input data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }
      
      // In a real application, we would save this to a database
      // and/or send an email notification
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Respond with success
      return res.status(200).json({ 
        success: true, 
        message: 'Message received! I will get back to you soon.' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
