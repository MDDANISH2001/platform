import { Schema, model, Types } from "mongoose";

const orderTimelineSchema = new Schema({
  orderItemId: { type: Types.ObjectId, ref: "OrderItem", required: true },
  status: { type: String, required: true },
  changedBy: { type: Types.ObjectId, ref: "Account", required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const OrderTimeline = model("OrderTimeline", orderTimelineSchema);
