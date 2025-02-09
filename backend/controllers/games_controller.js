import  Game  from '../model/game.js';

const getAllgames = async (req, res) => {
    const games = await Game.find();
    res.send(games);
}

export default getAllgames;