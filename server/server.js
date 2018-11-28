var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

// Configure body parser
app.use(bodyParser.json());

// Routes
/*
 * POST 
 */
app.post('/todos', (req, res) => {
    var _todo = new todo({
        text: req.body.text
    });

    _todo.save().then(todo => {
        res.send(todo);
    }, e => {
        res.status(400).send(e);
    });
});

// Listen
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Started on port ' + PORT);
});
