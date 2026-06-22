import { Router } from "express";

const router = Router();

router.post("/create", (req, res) => {
  res.json({ todo: "create order" });
});
router.get("/customer", (req, res) => {
  res.json({ todo: "customer orders" });
});
router.get("/tailor", (req, res) => {
  res.json({ todo: "tailor orders" });
});
router.get("/:id", (req, res) => {
  res.json({ todo: "get order" });
});
router.delete("/:id", (req, res) => {
  res.json({ todo: "delete order" });
});

// Order decisions
router.patch("/:id/accept", (req, res) => {
  res.json({ todo: "accept order" });
});
router.patch("/:id/reject", (req, res) => {
  res.json({ todo: "reject order" });
});

export default router;
