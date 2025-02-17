import Game from "../models/game.js";

const getAllgames = async (req, res) => {
  const selectedGenre = req.query.genre;
  if (selectedGenre) {
    const filtredGames = await Game.find({ genres: { $in: [selectedGenre] } });
    res.send({
      results: filtredGames,
      count: filtredGames.length,
    });
  } else {
    const games = await Game.find();
    res.send({
      results: games,
      count: games.length,
    });
  }
};

export default getAllgames;
