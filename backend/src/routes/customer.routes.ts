import { Router } from "express";

const router = Router();

router.get("/profile",          (req, res) => { res.json({ todo: "get profile" }); });
router.patch("/profile",        (req, res) => { res.json({ todo: "update profile" }); });
router.post("/address",         (req, res) => { res.json({ todo: "add address" }); });
router.get("/address",          (req, res) => { res.json({ todo: "get addresses" }); });
router.patch("/address/:id",    (req, res) => { res.json({ todo: "update address" }); });
router.delete("/address/:id",   (req, res) => { res.json({ todo: "delete address" }); });

export default router;
