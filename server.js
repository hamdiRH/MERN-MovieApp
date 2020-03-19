// const express = require("express");
import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import path from "path";

const app = express();

//middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Connect Database
connectDB();

//define Routes
// app.use("/api/users", require("./routes/api/users"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server started on port ", PORT));
