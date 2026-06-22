import { Schema, model } from "mongoose";

const accountSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["customer", "tailor", "admin"], required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Account = model("Account", accountSchema);
