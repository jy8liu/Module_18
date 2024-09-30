const { connect, connection } = require('mongoose');

const connectionString = 'mongodb+srv://sirminderbinder:6W6P061oMs7Y9ijC@cluster0.eyf9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

connect(connectionString);

module.exports = connection;
