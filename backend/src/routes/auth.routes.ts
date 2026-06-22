import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  res.json({ todo: "register" });
});
router.post("/login", (req, res) => {
  res.json({ todo: "login" });
});
router.post("/logout", (req, res) => {
  res.json({ todo: "logout" });
});
router.get("/me", (req, res) => {
  res.json({ todo: "me" });
});

export default router;
