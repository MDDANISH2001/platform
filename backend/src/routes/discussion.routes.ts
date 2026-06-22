import { Router } from "express";

const router = Router();

router.post("/create", (req, res) => {
  res.json({ todo: "create discussion message" });
});
router.get("/:orderItemId", (req, res) => {
  res.json({ todo: "get discussion" });
});

export default router;
