import { Schema, model, Types } from "mongoose";

const alterationRequestSchema = new Schema({
  orderItemId: { type: Types.ObjectId, ref: "OrderItem", required: true },
  reason: { type: String, required: true },
  requestStatus: {
    type: String,
    enum: ["requested", "approved", "rejected", "completed"],
    default: "requested",
  },
  isFreeAlteration: { type: Boolean, required: true },
  requestedAt: { type: Date, default: Date.now },
});

export const AlterationRequest = model(
  "AlterationRequest",
  alterationRequestSchema
);
