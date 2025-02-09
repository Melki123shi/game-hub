import express from 'express';
import games from '../routes/games.js';
import error from '../middleware/error.js';


export default function (app) {
    app.use(express.json());
    app.use('/api/games', games);
    app.use(error);
}