import createSlug from '../controllers/slugController.js'; 
import express from 'express';
const router = express.Router();

router.post('/create-slug', createSlug);

export default router;
