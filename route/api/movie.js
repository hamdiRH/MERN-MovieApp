import express from "express";
const router = express.Router();

import Movie from "../../model/movie";

// @route  GET localhost:5000/api/movies/getall
// @desc   Get all movies List
// @access Public
router.get("/getall", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies ? movies : { msg: "No movie found" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET localhost:5000/api/movies/getone/:id
// @desc   Get one movie
// @access Public
router.get("/getone/:id", async (req, res) => {
  try {
    const movie = await Movie.findById({ _id: req.params.id });
    res.send(movie ? movie : { msg: "No movie found" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST localhost:5000/api/movies/add
// @desc   Add new movie
// @access Public
router.post("/add", async (req, res) => {
  try {
    const newMovie = Movie({ ...req.body });
    const response = await newMovie.save();
    res.send(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  DELETE localhost:5000/api/movies/delete/:id
// @desc   delete one movie by id
// @access Public
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await Movie.findOneAndDelete({ _id: id });
    success ? res.json({ success: true }) : res.json({ success: false });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  PUT localhost:5000/api/movies/update/:id
// @desc   delete one movie by id
// @access Public
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    res.send(updatedMovie ? updatedMovie : { msg: "No movie found" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
export default router;
