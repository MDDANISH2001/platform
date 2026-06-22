import { Router } from "express";

const router = Router();

router.post("/schedule", (req, res) => {
  res.json({ todo: "schedule pickup" });
});
router.patch("/complete", (req, res) => {
  res.json({ todo: "complete pickup" });
});
router.patch("/fail", (req, res) => {
  res.json({ todo: "fail pickup" });
});
router.get("/:orderId", (req, res) => {
  res.json({ todo: "get pickup" });
});

export default router;
