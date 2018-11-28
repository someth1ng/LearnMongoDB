const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// todo.remove().then(res => console.log(res));

// todo.findOneAndRemove()

todo.findByIdAndRemove('5bfe63835b41b60015d02e12').then(todo => {
    console.log(todo);
});
