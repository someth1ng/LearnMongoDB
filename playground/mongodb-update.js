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

    // todoCol.findOneAndUpdate({
    //     _id: new ObjectID('5bf8c905b40164c8bfc3a9ce')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(res => {
    //     console.log(res);
    // });

    userCol.findOneAndUpdate({
        _id: new ObjectID('5bf8c10dad78a933a45315f4')
    }, {
        $set: {
            name: 'Grout Naux'
        },
        $inc: {
            age: 3
        }
    }, {
        returnOriginal: false
    }).then(res => {
        console.log(res);
    });

    client.close();
});