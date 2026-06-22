import { Router } from "express";

const router = Router();

router.post("/upload", (req, res) => {
  res.json({ todo: "upload media" });
});
router.delete("/:id", (req, res) => {
  res.json({ todo: "delete media" });
});
router.get("/:entityId", (req, res) => {
  res.json({ todo: "get media by entity" });
});

export default router;
