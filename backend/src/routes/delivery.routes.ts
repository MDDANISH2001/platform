import { Router } from "express";

const router = Router();

router.post("/schedule",        (req, res) => { res.json({ todo: "schedule delivery" }); });
router.patch("/complete",       (req, res) => { res.json({ todo: "complete delivery" }); });
router.patch("/fail",           (req, res) => { res.json({ todo: "fail delivery" }); });
router.patch("/reschedule",     (req, res) => { res.json({ todo: "reschedule delivery" }); });
router.get("/:itemId",          (req, res) => { res.json({ todo: "get delivery" }); });

export default router;
