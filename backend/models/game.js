import mongoose from "mongoose";

const gameschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  background_image: {
    type: String,
    required: true,
  },
  platforms: [
    {
      type: String,
      required: true,
    },
  ],
  genres: [
    {
      type: String,
      required: true,
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
  criticScore: {
    type: Number,
    required: true,
  },
  released: {
    type: Date,
    required: true,
  },
  added: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model("Game", gameschema);

export default Game;
