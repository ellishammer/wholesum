const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to the database.");
    }).catch(err => {
        console.log("Could not connect to the database. Exiting now...");
        process.exit();
});



app.get('/', (request, response) => {
   response.json({"message": "Welcome to the app"});
});

app.get('/users', function(reqest, response) {
    response.json({users: 'This is users dawg.'})
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});