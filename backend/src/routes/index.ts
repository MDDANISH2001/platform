import { Application } from "express";

import authRoutes from "./auth.routes";
import customerRoutes from "./customer.routes";
import tailorRoutes from "./tailor.routes";
import adminRoutes from "./admin.routes";
import serviceRoutes from "./service.routes";
import orderRoutes from "./order.routes";
import pickupRoutes from "./pickup.routes";
import deliveryRoutes from "./delivery.routes";
import discussionRoutes from "./discussion.routes";
import alterationRoutes from "./alteration.routes";
import mediaRoutes from "./media.routes";
import timelineRoutes from "./timeline.routes";

export const registerRoutes = (app: Application) => {
  app.use("/auth", authRoutes);
  app.use("/customer", customerRoutes);
  app.use("/tailor", tailorRoutes);
  app.use("/admin", adminRoutes);
  app.use("/service", serviceRoutes);
  app.use("/orders", orderRoutes);
  app.use("/pickup", pickupRoutes);
  app.use("/delivery", deliveryRoutes);
  app.use("/discussion", discussionRoutes);
  app.use("/alteration", alterationRoutes);
  app.use("/media", mediaRoutes);
  app.use("/timeline", timelineRoutes);
};
