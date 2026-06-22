import { Namespace } from "socket.io";

/**
 * /notifications namespace
 *
 * Client → Server:
 *   join(userId)          — join personal room to receive notifications
 *
 * Server → Client:
 *   notification:new      — pushed when a new notification is created (via REST or internally)
 */
export const notificationsNamespace = (nsp: Namespace) => {
  nsp.on("connection", (socket) => {
    console.log(`[notifications] connected: ${socket.id}`);

    socket.on("join", (userId: string) => {
      if (!userId) return socket.emit("error", { message: "userId required" });
      socket.join(`user:${userId}`);
      console.log(`[notifications] ${socket.id} joined room user:${userId}`);
    });

    socket.on("disconnect", () => {
      console.log(`[notifications] disconnected: ${socket.id}`);
    });
  });
};
