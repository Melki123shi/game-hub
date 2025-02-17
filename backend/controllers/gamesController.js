import Game from "../models/game.js";

const getAllgames = async (req, res) => {
  const selectedGenre = req.query.genre;
  console.log(req.query, 'req.query');
  if (selectedGenre) {
    const filtredGames = await Game.find({ genres: { $in: [selectedGenre] } });
    console.log(filtredGames, 'filtredGames');
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
