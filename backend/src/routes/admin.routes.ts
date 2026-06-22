import { Router } from "express";

const router = Router();

router.patch("/tailor/:id/approve", (req, res) => {
  res.json({ todo: "approve tailor" });
});
router.patch("/tailor/:id/suspend", (req, res) => {
  res.json({ todo: "suspend tailor" });
});
router.patch("/tailor/:id/inactive", (req, res) => {
  res.json({ todo: "inactive tailor" });
});

export default router;
