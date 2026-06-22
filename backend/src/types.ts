export interface ClientInfo {
  projectId: string;
  role: "controller" | "display";
}

export interface BroadcastPayload {
  type: string;
  data: Record<string, unknown>;
}
