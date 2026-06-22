import { Router } from "express";

const router = Router();

// Tailor self
router.post("/register",        (req, res) => { res.json({ todo: "tailor register" }); });
router.get("/profile",          (req, res) => { res.json({ todo: "tailor profile" }); });
router.patch("/profile",        (req, res) => { res.json({ todo: "update tailor profile" }); });

// Service configs
router.post("/service-config",          (req, res) => { res.json({ todo: "create service config" }); });
router.get("/service-configs",          (req, res) => { res.json({ todo: "get service configs" }); });
router.patch("/service-config/:id",     (req, res) => { res.json({ todo: "update service config" }); });
router.delete("/service-config/:id",    (req, res) => { res.json({ todo: "delete service config" }); });

// Delivery zones
router.post("/delivery-zone",           (req, res) => { res.json({ todo: "create delivery zone" }); });
router.get("/delivery-zones",           (req, res) => { res.json({ todo: "get delivery zones" }); });
router.patch("/delivery-zone/:id",      (req, res) => { res.json({ todo: "update delivery zone" }); });
router.delete("/delivery-zone/:id",     (req, res) => { res.json({ todo: "delete delivery zone" }); });

export default router;
