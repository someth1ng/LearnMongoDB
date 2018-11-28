var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

var user = mongoose.model('User', userSchema);

module.exports = {user};