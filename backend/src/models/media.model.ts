import { Schema, model, Types } from "mongoose";

const mediaSchema = new Schema({
  linkedEntityType: {
    type: String,
    enum: ["orderItem", "pickup", "alteration"],
    required: true,
  },
  linkedEntityId: { type: Types.ObjectId, required: true },
  mediaType: {
    type: String,
    enum: [
      "cloth_image",
      "reference_cloth",
      "pickup_verification",
      "alteration_issue",
    ],
    required: true,
  },
  url: { type: String, required: true },
  uploadedBy: { type: Types.ObjectId, ref: "Account", required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Media = model("Media", mediaSchema);
