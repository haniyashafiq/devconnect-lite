import express from "express";
import { placeBid } from "../controllers/bidController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Only developers can place bids
router.post("/place", authenticate, authorize("developer"), placeBid);

export default router;
