const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/errorHandler");
const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/tasks", taskRoutes);
app.use(notFound);
app.use(errorHandler);
module.exports = app;