console.log("I am task.js")

const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Task must have a name!"],
        minlength: [2, "Name must be longer than 2 characters!"]
    },
    description: {
        type: String,
        required: [true, "Description cannot be blank!"],
        minLength: [2, "Description must be at least 2 characters!"]
    },
    isComplete: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

mongoose.model('Task', TaskSchema);


