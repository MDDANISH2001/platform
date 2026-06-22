import { Router } from "express";

const router = Router();

router.get("/:orderItemId",     (req, res) => { res.json({ todo: "get timeline" }); });

export default router;
