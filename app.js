const express = require('express');
const session = require('express-session')
const uuidv4 = require('uuid/v4');
const app = express();

app.use(session({
    secret: '@n@l1v1@',
    genid: req => {
        return uuidv4(); // use UUIDs for session IDs
    },
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

const engine = require('./src/core');

const processMainRequest = (req, res) => {
    let dialogId = req.query.dialog;
    jsonCommands = engine.loadDialog(dialogId).run();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonCommands));
}

app.get('/', (req, res) => processMainRequest(req, res));
app.listen(3000, () => console.log('Example app listening on port 3000!'))