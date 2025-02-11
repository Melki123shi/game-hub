import Genre from '../models/genre.js';

const getAllGenres = async (req, res) => {
    const genres = await Genre.find();

    res.send({
        results: genres,
        count: genres.length
    });
}

export default getAllGenres;