//Algoritmos que serão executados pela máquina.

//armazenar informações nas variáveis e estruturas de dados.

//trabalhar com esses dados.

//Hash é uma síntese      função hash  >>

// quantidade maior de zeros = dificuldade de mineração do algoritmo

import hexToBinary from 'hex-to-binary';
import {GENESIS_DATA, MINE_RATE} from '../config.js';
import cryptoHash from '../util/crypto-hash.js';


/*

const hexToBinary = require('hex-to-binary');
{ GENESIS_DATA, MINE_RATE } = require('../config');
const { cryptoHash } = require('../util');
*/
class Block {
    constructor({ timestamp, lasthash, hash, data, nonce, difficulty }) { 
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;

}

static genesis () {
    return new this(GENESIS_DATA);
}

static mineBlock({  lastBlock , data  }) {

const lastHash = lastBlock.hash;

let hash, timestamp;

let{difficulty} = lastBlock;

let nonce = 0;

do {
nonce++;
timestamp = Date.now()
difficulty = Block.adjustDifficulty({originalBlock: lastBlock, timestamp}) ;
hash = cryptoHash(timestamp, lastHash, difficulty, nonce)
} 
while (hexToBinary(hash).substring(0,difficulty))

return new this (timestamp, lastHash, data, difficulty, nonce, hash)


}

static adjustDifficulty({originalBlock, timestamp}) {

const {difficulty} = originalBlock;

if (difficulty < 1) return 1;

if ((timestamp - originalBlock.timestamp)>MINE_RATE) return difficulty -1 ;

return difficulty + 1
}

}

export default Block;

//module.exports = Block ; 