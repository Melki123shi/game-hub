import  Game  from '../models/game.js';

const getAllgames = async (req, res) => {
    const games = await Game.find();
    res.send({
        results: games,
        count: games.length
    });
}

export default getAllgames;