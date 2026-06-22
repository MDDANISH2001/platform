import { Server, Namespace } from "socket.io";

export type NamespaceHandler = (nsp: Namespace) => void;

/**
 * Register a socket.io namespace.
 * Usage: registerNamespace(io, "/notifications", handler)
 */
export const registerNamespace = (
  io: Server,
  path: string,
  handler: NamespaceHandler,
) => {
  const nsp = io.of(path);
  handler(nsp);
  console.log(`[socket] namespace registered: ${path}`);
};
