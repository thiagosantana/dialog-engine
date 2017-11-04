const Sequelize = require('sequelize');
const logger = require('./log');
const sequelize = new Sequelize('postgres://santana:102005690@localhost:5432/dolores');

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err);
    });

exports.loadDialog = id => {
    console.log('Processing dialog ' + id);
}