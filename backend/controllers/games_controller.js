import  Game  from '../model/game.js';

const getAllgames = async (req, res) => {
    const games = await Game.find();
    res.send({
        results: games,
        count: games.length
    });
}

export default getAllgames;