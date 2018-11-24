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

    // deleteMay
    // todoCol.deleteMany({text: 'Eat Lunch'}).then(res => {
    //     console.log(res);
    // });

    // deleteOne
    // todoCol.deleteOne({text: 'Eat Lunch'}).then(res => {
    //     console.log(res);
    // });

    // findOneAndDelete
    // todoCol.findOneAndDelete({text: 'Eat Lunch'}).then(res => {
    //     console.log(res);
    // });

    userCol.deleteMany({name: 'Lam'}).then(res => {
        console.log('Delete all user has name Lam');
        console.log(res.result);
    });

    userCol.findOneAndDelete({
         _id: new ObjectID('5bf8c7b7b40164c8bfc3a93f')
    }).then(res => {
        console.log(res);
    });

    client.close();
});