// const express = require ('express');

import cors from 'cors'
import express, {json} from 'express'
import Blockchain from './Blockchain/blockchain.js'


const app = express()


app.use(json())
app.use(cors())

//const Blockchain = require('./Blockchain');

const blockchain = new Blockchain ();

app.get('/api/blocks', (req, res) => {

res.json(blockchain.chain);


})

app.post ('/api/mine',(req,res)=>{

const {data} = req.body;

blockchain.addBlock((data))

res.redirect('/api/blocks')

})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening at localhost: ${PORT}`));
