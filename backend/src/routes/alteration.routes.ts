import { Router } from "express";

const router = Router();

router.post("/request",             (req, res) => { res.json({ todo: "request alteration" }); });
router.patch("/approve",            (req, res) => { res.json({ todo: "approve alteration" }); });
router.patch("/reject",             (req, res) => { res.json({ todo: "reject alteration" }); });
router.patch("/complete",           (req, res) => { res.json({ todo: "complete alteration" }); });
router.get("/:orderItemId",         (req, res) => { res.json({ todo: "get alterations" }); });

export default router;
