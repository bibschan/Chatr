import config from "dotenv";
import express from "express";
// import bodyParser from "body-parser";
import userRoutes from "./../api/server/src/routes/UserRoutes.js";
import groupRoutes from "./../api/server/src/routes/GroupRoutes.js";
import userChoicesRoutes from "./../api/server/src/routes/UserChoicesRoutes.js";

const cors = require("cors");

config.config();
// const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

//
app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/userChoices", userChoicesRoutes);
//

// when a random route is inputed
// app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
