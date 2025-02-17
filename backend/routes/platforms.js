import express from 'express';
const router = express.Router();
import { getAllPlatforms } from '../controllers/platformsController.js';

router.get('/', getAllPlatforms);

export default router;