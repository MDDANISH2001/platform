import { Namespace } from "socket.io";

/**
 * /messages namespace
 *
 * Client → Server:
 *   join(orderItemId)     — join a discussion room for a specific order item
 *   message:send          — send a message in the discussion thread
 *     payload: { orderItemId, senderId, senderType, message }
 *
 * Server → Client:
 *   message:new           — broadcast new message to all in the room
 */
export const messagesNamespace = (nsp: Namespace) => {
  nsp.on("connection", (socket) => {
    console.log(`[messages] connected: ${socket.id}`);

    socket.on("join", (orderItemId: string) => {
      if (!orderItemId)
        return socket.emit("error", { message: "orderItemId required" });
      socket.join(`discussion:${orderItemId}`);
      console.log(`[messages] ${socket.id} joined discussion:${orderItemId}`);
    });

    socket.on(
      "message:send",
      (payload: {
        orderItemId: string;
        senderId: string;
        senderType: "customer" | "tailor";
        message: string;
      }) => {
        const { orderItemId, senderId, senderType, message } = payload;

        if (!orderItemId || !senderId || !senderType || !message) {
          return socket.emit("error", { message: "Invalid message payload" });
        }

        const room = `discussion:${orderItemId}`;
        nsp.to(room).emit("message:new", {
          orderItemId,
          senderId,
          senderType,
          message,
          createdAt: new Date().toISOString(),
        });
      },
    );

    socket.on("disconnect", () => {
      console.log(`[messages] disconnected: ${socket.id}`);
    });
  });
};
