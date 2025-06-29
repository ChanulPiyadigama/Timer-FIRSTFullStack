import mongoose from "mongoose";

const { Schema } = mongoose;

const studySessionSchema = new Schema({
    title : {
        type: String,
    },
    description : {
        type: String,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    timer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Timer',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastInteraction: {
        type: Date,
        default: Date.now
    },
    postedID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BasePost'
    },
    studiedTime: {
        type: Number,
        default: -1 //-1 indicates that the time has not been set yet
    }
});

const StudySession = mongoose.model('StudySession', studySessionSchema);

export default StudySession;