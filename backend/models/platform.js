import  mongoose from 'mongoose';

const platformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Platform = mongoose.model('Platform', platformSchema);

export default Platform;