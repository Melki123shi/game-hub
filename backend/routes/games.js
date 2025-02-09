import express from 'express';
const router = express.Router();

import getAllgames from '../controllers/games_controller.js';

router.get('/', getAllgames);

export default router;