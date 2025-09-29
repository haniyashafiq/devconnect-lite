import express from "express";
import { createProject, getOpenProjects, getProjectBids, exportProjects } from "../controllers/projectController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Only users can create projects
router.post("/create", authenticate, authorize("user"), createProject);

// Developers view open projects
router.get("/open", authenticate, authorize("developer"), getOpenProjects);

// Get bids for a project (any logged-in user)
router.get("/:id/bids", authenticate, getProjectBids);

// Export projects to JSON (any logged-in user)
router.get("/export/all", authenticate, exportProjects);

export default router;
