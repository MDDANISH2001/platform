import { Schema, model, Types } from "mongoose";

const pickupSchema = new Schema({
  orderGroupId: { type: Types.ObjectId, ref: "OrderGroup", required: true },
  pickupDate: { type: Date, required: true },
  pickupTimeSlot: { type: String, required: true },
  handledBy: { type: Types.ObjectId, ref: "Account", default: null },
  pickupStatus: {
    type: String,
    enum: ["scheduled", "completed", "failed"],
    default: "scheduled",
  },
  pickupNotes: { type: String },
  completedAt: { type: Date },
});

export const Pickup = model("Pickup", pickupSchema);
