import { Router } from "express";

const router = Router();

router.post("/create",    (req, res) => { res.json({ todo: "create service" }); });
router.get("/all",        (req, res) => { res.json({ todo: "get all services" }); });
router.patch("/:id",      (req, res) => { res.json({ todo: "update service" }); });
router.delete("/:id",     (req, res) => { res.json({ todo: "delete service" }); });

export default router;
