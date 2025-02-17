import Game from "../models/game.js";

const getAllgames = async (req, res) => {
  const selectedGenre = req.query.genre;
  const selectedPlatform = req.query.platform;

  let games;

  if (selectedGenre && selectedPlatform) {
    games = await Game.find({
      platforms: { $in: [selectedPlatform] },
      genres: { $in: [selectedGenre] },
    });
  } else if (selectedGenre) {
    games = await Game.find({ genres: { $in: [selectedGenre] } });
  } else if (selectedPlatform) {
    games = await Game.find({ platforms: { $in: [selectedPlatform] } });
  } else {
    games = await Game.find();
  }

  res.send({
    results: games,
    count: games.length,
  });
};

export default getAllgames;
