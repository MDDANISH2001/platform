import { Schema, model, Types } from "mongoose";

const deliveryZoneSchema = new Schema({
  tailorId: { type: Types.ObjectId, ref: "TailorProfile", required: true },
  zoneName: { type: String, required: true },
  minDistanceKm: { type: Number, required: true },
  maxDistanceKm: { type: Number, required: true },
  pickupCharge: { type: Number, required: true },
  deliveryCharge: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const DeliveryZone = model("DeliveryZone", deliveryZoneSchema);
