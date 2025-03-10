import express from 'express';
const router = express.Router();

import {getAllgames, getGameDetail} from '../controllers/gamesController.js';

router.get('/', getAllgames);

router.get('/:id', getGameDetail);

export default router;