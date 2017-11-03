const express = require('express');
const app = express();

const engine = require('./src/core');

const processMainRequest = (req, res) => {
    let dialogId = req.query.dialog;
    engine.loadDialog(dialogId);
    res.send('ok');
}

app.get('/', (req, res) => processMainRequest(req, res));
app.listen(3000, () => console.log('Example app listening on port 3000!'))