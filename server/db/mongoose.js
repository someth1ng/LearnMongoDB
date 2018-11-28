const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var connectStrmLab = 'mongodb://someth1ng:Asdasd214@ds111496.mlab.com:11496/todosapp';
var connectStrLocal = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(connectStrmLab, { useNewUrlParser: true });

module.exports = {
    mongoose
};