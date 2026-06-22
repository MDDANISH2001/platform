import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  serviceName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const Service = model("Service", serviceSchema);
