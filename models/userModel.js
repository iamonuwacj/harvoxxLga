import mongoose from "mongoose";


const UserSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
})

export const User = mongoose.model("User", UserSchema)