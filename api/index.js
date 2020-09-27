import config from "dotenv";
import express from "express";
// import bodyParser from "body-parser";
import userRoutes from "./server/src/routes/UserRoutes.js";
import categoryRoutes from "./server/src/routes/CategoriesRouter.js";
import userCategoryRoutes from "./server/src/routes/UserCategoriesRouter.js";

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
app.use("/categories", categoryRoutes);
app.use("/user_categories", userCategoryRoutes);
//

// when a random route is inputed
app.get("/", (req, res) => {
  //to do - running into issues when sending file
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
