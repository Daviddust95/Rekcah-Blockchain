const express = require ('express');

const Blockchain = require('./Blockchain');
const res = require('express/lib/response');

const app = express()

const blockchain = new Blockchain ()

app.get('/api/blocks', (req, res) => {

res.json(blockchain.Blockchain)


})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening at localhost: ${PORT}`));
