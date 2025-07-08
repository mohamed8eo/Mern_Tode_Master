import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true, // adds createdAt and updatedAt
});

const User = mongoose.model('User', userSchema);

export default User; 