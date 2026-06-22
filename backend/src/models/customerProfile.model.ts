import { Schema, model, Types } from "mongoose";

const customerProfileSchema = new Schema(
  {
    accountId: { type: Types.ObjectId, ref: "Account", required: true },
  },
  { timestamps: true },
);

export const CustomerProfile = model("CustomerProfile", customerProfileSchema);
