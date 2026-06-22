import { Schema, model, Types } from "mongoose";

const orderDiscussionSchema = new Schema({
  orderItemId: { type: Types.ObjectId, ref: "OrderItem", required: true },
  senderType: { type: String, enum: ["customer", "tailor"], required: true },
  senderId: { type: Types.ObjectId, ref: "Account", required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const OrderDiscussion = model("OrderDiscussion", orderDiscussionSchema);
