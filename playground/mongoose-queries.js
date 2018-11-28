const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// var id = '5bfe51546a217440fc7afe9e';
// Error id below
// var id = '6bfe51546a2174';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// todo.findOne({
//     _id: id
// }).then((_todo) => {
//     console.log('Todo', _todo);
// });

// todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id ', todo);
// }).catch(e => console.log(e));

var userID = '5bfe27460350c10f1c2d2a51';
user.findById(userID).then((res) => {
    if (!res) {
        return console.log('Unable to find user');
    }
    
    console.log(res);
}, (e) => console.log(e));