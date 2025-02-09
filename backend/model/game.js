import mongoose from "mongoose";

const gameschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameschema);

export default Game;
