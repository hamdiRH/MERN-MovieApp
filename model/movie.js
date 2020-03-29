import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  name: { type: String },
  year: { type: Number },
  rate: { type: Number },
  image: { type: Object },
  description: { type: String }
});
[];

export default mongoose.model("movie", MovieSchema);
