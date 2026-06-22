import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

import { connectDB } from "./configs/db";
import { registerRoutes } from "./routes";
import { registerNamespace } from "./configs/socket";
import { notificationsNamespace } from "./configs/namespaces/notifications";
import { messagesNamespace } from "./configs/namespaces/messages";

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// REST routes
registerRoutes(app);

// HTTP + Socket.IO server
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

// Socket namespaces
registerNamespace(io, "/notifications", notificationsNamespace);
registerNamespace(io, "/messages",      messagesNamespace);

const PORT = process.env.PORT ?? 8800;

const start = async () => {
  await connectDB();
  httpServer.listen(PORT, () => {
    console.log(`[server] running on http://localhost:${PORT}`);
  });
};

start();
