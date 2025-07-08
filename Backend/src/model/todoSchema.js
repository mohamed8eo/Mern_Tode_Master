import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    clerkId: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
