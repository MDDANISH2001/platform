import { Schema, model, Types } from "mongoose";

const deliverySchema = new Schema({
  orderItemId: { type: Types.ObjectId, ref: "OrderItem", required: true },
  deliveryDate: { type: Date, required: true },
  deliveryTimeSlot: { type: String, required: true },
  handledBy: { type: Types.ObjectId, ref: "Account", default: null },
  deliveryAttemptCount: { type: Number, default: 1 },
  deliveryStatus: {
    type: String,
    enum: ["scheduled", "failed", "delivered"],
    default: "scheduled",
  },
  extraDeliveryCharge: { type: Number, default: 0 },
  deliveryNotes: { type: String },
  completedAt: { type: Date },
});

export const Delivery = model("Delivery", deliverySchema);
