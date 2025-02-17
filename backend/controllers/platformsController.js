import Platform from '../models/platform.js';

export const getAllPlatforms = async (req, res) => {
    const platforms = await Platform.find();
    res.send({
        results: platforms,
        count: platforms.length,
    });
}