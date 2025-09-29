import pool from "../config/db.js";

export const placeBid = async (req, res) => {
  try {
    const { project_id, amount, message } = req.body;
    const developerId = req.user.id;

    await pool.query(
      "INSERT INTO bids (project_id, developer_id, amount, message) VALUES (?, ?, ?, ?)",
      [project_id, developerId, amount, message]
    );

    res.json({ message: "Bid placed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
