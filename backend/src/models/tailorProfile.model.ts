import { Schema, model, Types } from "mongoose";

const tailorProfileSchema = new Schema(
  {
    accountId: { type: Types.ObjectId, ref: "Account", required: true },
    shopName: { type: String },
    shopAddress: { type: String },
    accountStatus: {
      type: String,
      enum: ["pending_approval", "approved", "inactive", "suspended"],
      default: "pending_approval",
    },
    weeklyCapacityHours: { type: Number },
    languages: [{ type: String }],
    isAvailable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TailorProfile = model("TailorProfile", tailorProfileSchema);
