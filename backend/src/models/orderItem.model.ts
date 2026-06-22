import { Schema, model, Types } from "mongoose";

const orderItemSchema = new Schema({
  orderGroupId: { type: Types.ObjectId, ref: "OrderGroup", required: true },
  serviceId: { type: Types.ObjectId, ref: "Service", required: true },
  serviceNameSnapshot: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  basePriceSnapshot: { type: Number, required: true },
  urgencyLevel: {
    type: String,
    enum: ["normal", "priority", "express"],
    default: "normal",
  },
  urgencyCharge: { type: Number, default: 0 },
  finalPrice: { type: Number, required: true },
  estimatedHours: { type: Number },
  requestedDeliveryDate: { type: Date },
  measurementType: {
    type: String,
    enum: ["manual_measurement", "reference_cloth"],
    required: true,
  },
  manualMeasurements: [
    {
      fieldName: { type: String },
      value: { type: String },
    },
  ],
  referenceFitPreference: {
    type: String,
    enum: ["same_fit", "slightly_tighter", "slightly_looser", "custom"],
  },
  customNotes: { type: String },
  itemStatus: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export const OrderItem = model("OrderItem", orderItemSchema);
