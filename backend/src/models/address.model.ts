import { Schema, model, Types } from "mongoose";

const addressSchema = new Schema({
  customerId: { type: Types.ObjectId, ref: "CustomerProfile", required: true },
  label: { type: String, enum: ["home", "office", "custom"], required: true },
  fullAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  landmark: { type: String },
  isDefault: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Address = model("Address", addressSchema);
