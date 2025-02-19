import Game from "../models/game.js";

const getAllgames = async (req, res) => {
  const selectedGenre = req.query.genre;
  const selectedPlatform = req.query.platform;
  const word = req.query.search;
  
  let sorting = req.query.sortBy;

  let sortOption = {};

  if (sorting) {
    const isDescending = sorting.startsWith("-");
    const sortField = isDescending ? sorting.substring(1) : sorting;

    const allowedFields = ["name", "released", "added", "rating", "criticScore"];

    if (allowedFields.includes(sortField)) {
      sortOption[sortField] = isDescending ? -1 : 1;
    }
  }

  let query = {};
  if (selectedGenre) query.genres = { $in: [selectedGenre] };
  if (selectedPlatform) query.platforms = { $in: [selectedPlatform] };
  if (word) query.name = { $regex: word, $options: "i" };

  const games = await Game.find(query).sort(sortOption);

  res.send({
    results: games,
    count: games.length,
  });
};

export default getAllgames;
