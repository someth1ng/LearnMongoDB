// const MongoClient   = require('mongodb').MongoClient;
const {MongoClient, ObjectID}   = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server.');
    const db        = client.db('TodoApp');
    let todoCol     = db.collection('Todos');
    let userCol     = db.collection('Users');

    // todoCol.find({ 
    //     _id: new ObjectID('5bf57487648aaf67ec85f53f')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // })
    
    // todoCol.find().count().then((count) => {
    //     console.log(`Number of Todos: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // })

    userCol.find({name: 'Lam'}).toArray().then(users => {
        console.log(JSON.stringify(users, undefined, 2));
    }, err => {
        console.log('Unable to find users', err);
    })

    client.close();
});