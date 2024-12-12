import mongoose from "mongoose";


const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        required: true,
        type: String,
    },
    image: {
        type: String,
        default: ""
    },

    dateCreated: {
        type: String,
        default: ""
    },

}, {timestamps: true})




export const News = mongoose.model('News', newsSchema);

