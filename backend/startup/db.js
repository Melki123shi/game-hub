import mongoose from "mongoose";

export default async function () {
    const db = process.env.DB || 'mongodb://localhost:27017/game-hub'; // Default to local MongoDB
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to ${db}...`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); 
    }
}