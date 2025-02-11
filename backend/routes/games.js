import express from 'express';
const router = express.Router();

import getAllgames from '../controllers/gamesController.js';

router.get('/', getAllgames);

export default router;