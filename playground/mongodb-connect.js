// const MongoClient   = require('mongodb').MongoClient;
const {MongoClient, ObjectID}   = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server.');
    const db    = client.db('TodoApp');
    const col   = db.collection('Users');

    // db.collection('Todos').insertOne({
    //     text: 'Eat Luch',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Xuan Trong',
    //     age: 22,
    //     location: 'Sai Gon'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert new user', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // col.findOne({name: 'Lam'}).then(res => {
    //     if (res)
    //         console.log(res._id.getTimestamp());
    // }, reject => {
    //     console.log(reject);
    // });

    client.close();
});