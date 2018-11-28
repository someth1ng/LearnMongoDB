const mongoose    = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

// var todoSchema = new mongoose.Schema({
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var todo = mongoose.model('Todo', todoSchema);

// var newTodo = new todo({
//     text: '  Code Web   '
// });

// newTodo.save().then(todo => {
//     console.log('Saved todo', todo);
// }, err => {
//     console.log(err);
// });

// User
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

var user = mongoose.model('User', userSchema);

var newUser = new user({
    email: "trinhoanglam214@gmail.com"
});

newUser.save().then(user => {
    console.log('Saved user', user);
}, err => {
    console.log(err);
});
