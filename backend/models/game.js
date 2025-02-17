import mongoose from "mongoose";

const gameschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  released: {
    type: String,
    required: true
  },
  background_image: {
    type: String,
    required: true
  },
  platforms: [{
    type: String,
    required: true
  } ],
  genres: [{
    type: String,
    required: true
  }],
});

const Game = mongoose.model("Game", gameschema);

export default Game;
