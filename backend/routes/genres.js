import express from "express";
const router = express.Router();
import getAllGenres from "../controllers/genresController.js";

router.get("/", getAllGenres);

export default router;