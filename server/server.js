const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const methodOverride = require('method-override');

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');


var app = express();

// Configure body parser
app.use(bodyParser.json());

// View engine
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(__dirname + '/public'));

// Set method override
app.use(methodOverride('_method'));

// Routes -------------------------------------------------
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

/*
 *  GET /
 */
app.get('/', (req, res) => {
    res.redirect('todos');
});

/*
 *  GET /todos
 */
app.get('/todos', (req, res) => {
    todo.find().then((todos) => {
        res.render('todos', {todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

/*
 *  GET /todos/:id
 */
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if (!ObjectID.isValid(id)) {
        return res.status(400).send({});
    }

    todo.findById(id).then(td => {
        if (!td) {
            return res.status(404).send({msg:'Todo not found!'});
        }

        res.send(td);
    }, e => res.status(400).send({}));
});

/*
 *  DELETE /todos/:id
 */
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send({});
    }

    todo.findByIdAndRemove(id).then(td => {
        if (!td) {
            return res.status(404).send({ msg: 'Todo not found!' });
        }

        // res.send(td);
        res.redirect('back');
    }, e => res.status(400).send({}));
});

/*
 *  PUT /todos/:id
 */
app.put('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(400).send({});
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(td => {
        if (!td) {
            return res.status(404).send({ msg: 'Todo not found!' });
        }

        res.send(td);
    }, e => res.status(400).send({}));
});

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Started up at port ' + PORT);
});

module.exports = {app};
