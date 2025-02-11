import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    games_count: {
        type: Number,
        default: 0,
    },
    image_background: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
});

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;