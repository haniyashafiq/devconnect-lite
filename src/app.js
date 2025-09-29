import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js"
import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";
import bidRoutes from "./routes/bids.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/bids", bidRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on http://localhost:${process.env.PORT}`);
// });

app.use((err,req,res,next) => {
    console.log(err)
    res.status(err.status || 500).send("something went wrong.")
})

db.query("SELECT 1")
.then(data => {console.log("db connection succeeded.")
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

})
.catch(err => console.log("db connection failed. \n" + err))
