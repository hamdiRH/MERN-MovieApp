import express from "express";
const router = express.Router();

import Movie from "../../model/movie";

router.get("/getall", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/getone/:id", async (req, res) => {
  try {
    const movie = await Movie.findById({ id: req.params.id });
    res.send(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

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
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    res.send(updatedMovie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
export default router;
