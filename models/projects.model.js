import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
        unique: true
    },

    image: {
        type: String,
        default: ""
    },

    otherImges: {
        type: Array,
        default: []
    }
}, {timestamps: true})




export const Project = mongoose.model('Project', projectSchema);

