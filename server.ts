import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client
  let ai: GoogleGenAI | null = null;
  try {
    if (process.env.GEMINI_API_KEY) {
      ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
  } catch (error) {
    console.error("Failed to initialize Gemini AI:", error);
  }

  const SCHOOL_INFO = `
    You are the official AI assistant for "The Iqra English Medium School", located in Chadotar, Palanpur, Gujarat.
    Your goal is to help parents, students, and visitors by answering questions about the school.
    
    School Details:
    - Name: The Iqra English Medium School
    - Location: Chadotar, Palanpur, Gujarat, India.
    - Type: English Medium Co-educational School.
    - Vision: To empower students with knowledge, character, and skills for the future.
    - Mission: To provide high-quality education in a nurturing and inclusive environment.
    - Academics: Offers comprehensive academic programs with a modern curriculum.
    - Facilities: Modern classrooms, well-equipped Science Labs, Computer Lab, Library, and Sports grounds.
    - Admissions: Open for various grades. Parents can contact the school administration for the detailed procedure.
    - Contact Email: info@iqraschoolchadotar.edu (simulated)
    - Contact Phone: +91 98765 43210 (simulated)
    
    Guidelines:
    - Answer user queries concisely, politely, and enthusiastically.
    - If you don't know the exact answer to a specific question (like exact fee structures or specific dates), kindly advise them to contact the school office.
    - Keep responses short, ideally 1-3 sentences, suitable for a chat interface.
  `;

  // AI Chat API Route
  app.post("/api/chat", async (req, res) => {
    try {
      if (!ai) {
        return res.status(503).json({ error: "AI service is currently unavailable. Please check API key." });
      }

      const { message, history } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      // Convert history to format expected by Gemini (if needed), or just pass it to a chat session.
      // For simplicity in this demo, we'll start a new chat or just generate content with history included in prompt.
      
      const formattedHistory = history ? history.map((msg: any) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n') : '';
      const prompt = `${formattedHistory}\nUser: ${message}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction: SCHOOL_INFO,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to generate response." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
