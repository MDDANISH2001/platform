import { Schema, model, Types } from "mongoose";

const tailorServiceConfigSchema = new Schema({
  tailorId: { type: Types.ObjectId, ref: "TailorProfile", required: true },
  serviceId: { type: Types.ObjectId, ref: "Service", required: true },
  basePrice: { type: Number, required: true },
  estimatedMinHours: { type: Number, required: true },
  estimatedMaxHours: { type: Number, required: true },
  urgencyPricing: {
    priorityPercent: { type: Number, default: 0 },
    expressPercent: { type: Number, default: 0 },
  },
  updatedAt: { type: Date, default: Date.now },
});

export const TailorServiceConfig = model(
  "TailorServiceConfig",
  tailorServiceConfigSchema,
);
