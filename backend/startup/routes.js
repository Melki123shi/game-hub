import express from 'express';
import games from '../routes/games.js';
import error from '../middleware/error.js';
import slugs from '../routes/slugs.js';
import genres from '../routes/genres.js';
import Platforms from '../routes/platforms.js';

export default function (app) {
    app.use(express.json());
    app.use('/api/games', games);
    app.use('/api/slugs', slugs);
    app.use('/api/genres', genres);
    app.use('/api/platforms', Platforms);
    app.use(error);
}