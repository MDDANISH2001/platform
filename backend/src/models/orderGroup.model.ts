import { Schema, model, Types } from "mongoose";

const orderGroupSchema = new Schema({
  customerId: { type: Types.ObjectId, ref: "CustomerProfile", required: true },
  tailorId: { type: Types.ObjectId, ref: "TailorProfile", required: true },
  pickupAddressId: { type: Types.ObjectId, ref: "Address", required: true },
  totalItems: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  pickupCharge: { type: Number, default: 0 },
  deliveryMode: {
    type: String,
    enum: ["deliver_together", "deliver_separately"],
    required: true,
  },
  paymentMode: { type: String, enum: ["cash"], default: "cash" },
  paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
  cancellationAllowed: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const OrderGroup = model("OrderGroup", orderGroupSchema);
