const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var todo = mongoose.model('Todo', todoSchema);

module.exports = {todo};