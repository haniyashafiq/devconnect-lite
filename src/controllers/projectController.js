import fs from "fs";
import pool from "../config/db.js";

export const createProject = async (req, res) => {
  try {
    const { title, description, tech_stack, budget } = req.body;
    const userId = req.user.id;

    await pool.query(
      "INSERT INTO projects (user_id, title, description, tech_stack, budget, status) VALUES (?, ?, ?, ?, ?, 'open')",
      [userId, title, description, tech_stack, budget]
    );

    res.json({ message: "Project created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOpenProjects = async (req, res) => {
  try {
    const [projects] = await pool.query("SELECT * FROM projects WHERE status = 'open'");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProjectBids = async (req, res) => {
  try {
    const projectId = req.params.id;
    const [bids] = await pool.query("SELECT * FROM bids WHERE project_id = ?", [projectId]);
    res.json(bids);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const exportProjects = async (req, res) => {
  try {
    const [projects] = await pool.query("SELECT * FROM projects");
    fs.writeFileSync("projects.json", JSON.stringify(projects, null, 2));
    res.json({ message: "Projects exported", count: projects.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
